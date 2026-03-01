# ========== 1) Deps ==========
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci


# ========== 2) Build ==========
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
# Opcional:
# ENV NEXT_SKIP_TYPECHECK=1

RUN npm run build

# Limpiamos cache de Next
RUN rm -rf .next/cache

# Quitamos devDependencies
RUN npm prune --omit=dev


# ========== 3) Runtime (standalone) ==========
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Bundle standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./ 

# Archivos estáticos
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

RUN mkdir -p .next/cache/images && chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
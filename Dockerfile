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
# Opcional si quieres saltarte typecheck:
# ENV NEXT_SKIP_TYPECHECK=1

RUN npm run build

# Reducir tamaño: limpiamos cache de Next
RUN rm -rf .next/cache

# Quitamos devDependencies de node_modules
RUN npm prune --omit=dev


# ========== 3) Runtime ==========
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# node_modules ya sin devDeps
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

# build de Next + estáticos
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
# 👇 Si quieres copiar next.config.* (opcional), hazlo así, sin || true:
# COPY --from=builder --chown=nextjs:nodejs /app/next.config.mjs ./next.config.mjs

RUN mkdir -p .next/cache/images && chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["npm", "run", "start"]
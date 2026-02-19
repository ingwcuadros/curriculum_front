export const mockArticles = [
  {
    id: "a1",
    titulo: "Optimización de imágenes en GCP con Cloud Run",
    url: "optimizacion-imagenes-gcp-cloud-run",
    content: "## Introducción\nEste artículo explica cómo optimizar imágenes en GCP usando Cloud Run y Cloud Storage.\n\n### Pasos\n- Subir a Cloud Storage\n- Procesar en Cloud Run\n- Cachear en CDN\n\n## Beneficios\n- Reducción de tiempos de carga\n- Menor consumo de ancho de banda\n- Mejor experiencia de usuario\n\n### Código de ejemplo\n```javascript\nconst processImage = async (file) => {\n  const storage = new Storage();\n  await storage.bucket('my-bucket').upload(file);\n};\n```\n\n## Conclusión\nLa optimización de imágenes es crucial para el rendimiento web.",
    auxiliaryContent: "Demo y repositorio público disponible en GitHub.",
    fecha: "2025-11-10T00:00:00.000Z",
    promo: "Mejora tiempos de carga hasta 40%",
    image: null,
    categoria: "Arquitectura Cloud",
    tags: ["GCP", "Images", "Optimización"]
  },
  {
    id: "a2",
    titulo: "Estrategias de embeddings con Pinecone y OpenAI",
    url: "estrategias-embeddings-pinecone-openai",
    content: "## Vector DB\nComparativa de índices, tamaños y costos.\n\n### Tipos de índices\n| Tipo | Latencia | Costo |\n|------|----------|-------|\n| Flat | Baja | Alto |\n| HNSW | Media | Medio |\n| IVF | Alta | Bajo |\n\n```bash\n# Ejemplo de upsert\npinecone.upsert(vectors=data)\n```\n\n## Optimización\n- Chunking estratégico\n- Metadata filtering\n- Hybrid search",
    auxiliaryContent: "Incluye guía de costos y calculadora de presupuesto.",
    fecha: "2025-10-22T00:00:00.000Z",
    promo: "Embeddings robustos y escalables",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    categoria: "AI/ML",
    tags: ["AI", "Pinecone", "OpenAI"]
  },
  {
    id: "a3",
    titulo: "NestJS + Vue/Next: patrones de arquitectura frontend-backend",
    url: "nestjs-vue-next-patrones-arquitectura",
    content: "## Patrón BFF\nVentajas y trade-offs del Backend for Frontend.\n\n### Observabilidad\nLogs estructurados y métricas con:\n- Winston para logs\n- Prometheus para métricas\n- Jaeger para tracing\n\n## Estructura de proyecto\n```\nsrc/\n├── modules/\n├── shared/\n└── infrastructure/\n```",
    fecha: "2025-09-05T00:00:00.000Z",
    promo: "Organiza capas y responsabilidades",
    image: null,
    categoria: "Arquitectura Cloud",
    tags: ["NestJS", "VueJS", "NextJS"]
  },
  {
    id: "a4",
    titulo: "Delivery Management: métricas que importan",
    url: "delivery-management-metricas",
    content: "## KPIs Fundamentales\n- **Lead time**: tiempo desde commit hasta producción\n- **Throughput**: items completados por sprint\n- **Flow efficiency**: tiempo activo vs tiempo total\n\n## Tablero de métricas\nVisualización efectiva con Grafana y custom dashboards.\n\n### Alertas\n- Degradación de lead time\n- Bloqueos prolongados\n- WIP excedido",
    fecha: "2025-08-19T00:00:00.000Z",
    categoria: "Delivery Management",
    tags: ["Delivery", "KPIs", "Scrum"]
  },
  {
    id: "a5",
    titulo: "Product Owner Técnico: backlog listo para escalar",
    url: "product-owner-tecnico-backlog-escalable",
    content: "## Priorización efectiva\nBalance entre coste e impacto usando frameworks como RICE y WSJF.\n\n## Tech debt\nGestión sostenible:\n1. Identificación temprana\n2. Cuantificación de impacto\n3. Inclusión en roadmap\n\n### Herramientas\n- Jira con campos personalizados\n- Story mapping digital\n- Dependency tracking",
    fecha: "2025-07-14T00:00:00.000Z",
    categoria: "Product Ownership",
    tags: ["PO", "Roadmap", "APIs", "UX"]
  },
  {
    id: "a6",
    titulo: "CI/CD con Terraform y GCP: pipeline de extremo a extremo",
    url: "ci-cd-terraform-gcp-pipeline",
    content: "## Infra como código\nMódulos reutilizables para GCP:\n\n```hcl\nmodule \"gke_cluster\" {\n  source  = \"./modules/gke\"\n  project = var.project_id\n  region  = var.region\n}\n```\n\n## Seguridad\n- Policy as Code con OPA\n- Guardrails automáticos\n- Drift detection",
    fecha: "2025-06-20T00:00:00.000Z",
    promo: "Pipeline completo de infraestructura",
    categoria: "DevOps",
    tags: ["GCP", "Terraform", "CI/CD"]
  },
  {
    id: "a7",
    titulo: "Observabilidad práctica: logs, métricas y trazas",
    url: "observabilidad-practica-logs-metricas-trazas",
    content: "## Stack completo\n- **Prometheus**: métricas\n- **Grafana**: visualización\n- **OpenTelemetry**: trazas distribuidas\n\n## Alertas inteligentes\nEvitar fatiga de alertas:\n- Agregación de eventos\n- Correlación automática\n- Runbooks asociados",
    fecha: "2025-05-09T00:00:00.000Z",
    promo: "Stack de observabilidad moderno",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    categoria: "Observabilidad",
    tags: ["Monitoring", "Tracing", "SRE"]
  },
  {
    id: "a8",
    titulo: "Ibexa CMS: bloques y componentes para sitios modernos",
    url: "ibexa-cms-bloques-componentes",
    content: "## Integración\nBloques personalizados con Twig + JavaScript:\n\n```twig\n{% block content %}\n  <div class=\"hero-block\">\n    {{ content.title }}\n  </div>\n{% endblock %}\n```\n\n## Rendimiento\n- HTTP Cache layers\n- CDN configuration\n- Varnish tuning",
    fecha: "2025-04-12T00:00:00.000Z",
    categoria: "Product Ownership",
    tags: ["Ibexa", "CMS", "Frontend"]
  },
  {
    id: "a9",
    titulo: "Next.js App Router: SEO y rendimiento",
    url: "nextjs-app-router-seo-rendimiento",
    content: "## Metadatos dinámicos\nGeneración de OpenGraph y JSON-LD:\n\n```typescript\nexport async function generateMetadata({ params }) {\n  return {\n    title: 'Mi página',\n    openGraph: { ... }\n  };\n}\n```\n\n## Edge Runtime\nRender en el borde para latencia mínima.",
    fecha: "2025-03-28T00:00:00.000Z",
    promo: "SEO técnico avanzado",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    categoria: "Arquitectura Cloud",
    tags: ["NextJS", "SEO", "Edge"]
  },
  {
    id: "a10",
    titulo: "Vue 3 Composition API: patrones de estado",
    url: "vue3-composition-api-patrones-estado",
    content: "## Estado con Composables\nCreación de stores reutilizables:\n\n```javascript\nexport function useCounter() {\n  const count = ref(0);\n  const increment = () => count.value++;\n  return { count, increment };\n}\n```\n\n## Performance\n- Memoización con computed\n- Lazy loading de componentes",
    fecha: "2025-02-17T00:00:00.000Z",
    categoria: "Arquitectura Frontend",
    tags: ["VueJS", "State", "Performance"]
  },
  {
    id: "a11",
    titulo: "Gestión de imágenes en S3 compatible",
    url: "gestion-imagenes-s3-compatible",
    content: "## Almacenamiento\nConfiguración de buckets y políticas de acceso.\n\n## CDN Integration\n- CloudFront distribution\n- Cache invalidation\n- Image optimization on-the-fly",
    fecha: "2025-01-30T00:00:00.000Z",
    categoria: "Arquitectura Cloud",
    tags: ["S3", "CDN", "Images"]
  },
  {
    id: "a12",
    titulo: "Roadmap 2025: arquitectura, producto y operación",
    url: "roadmap-2025-arquitectura-producto-operacion",
    content: "## Objetivos del año\n- **Cloud**: Migración completa a GCP\n- **AI**: Integración de modelos propios\n- **Observabilidad**: Stack unificado\n\n## Entregables trimestrales\n| Q | Foco | Entregable |\n|---|------|------------|\n| Q1 | Infra | GKE migration |\n| Q2 | AI | RAG implementation |\n| Q3 | Obs | Full tracing |\n| Q4 | Scale | Multi-region |",
    fecha: "2025-01-10T00:00:00.000Z",
    promo: "Plan estratégico completo",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    categoria: "Planificación",
    tags: ["Roadmap", "Product", "Delivery"]
  },
  {
    "id": "a13",
    "titulo": "Desarrollador en Smart Data Automation",
    "url": "smart-data-automation-desarrollador-fullstack",
    "content": "## Rol y contexto\n\nEntre agosto de 2019 y abril de 2021 trabajé como Desarrollador Fullstack en Smart Data Automation, participando en el desarrollo de soluciones de software a la medida para diferentes clientes.\n\nEl foco principal del trabajo era construir aplicaciones web robustas, mantenibles y orientadas a resultados de negocio, utilizando PHP (CodeIgniter) en el backend y JavaScript en el frontend, integrando buenas prácticas de desarrollo y control de versiones.\n\n---\n\n## Responsabilidades clave\n\n- Desarrollo de software a la medida sobre PHP con CodeIgniter, desde el análisis de requerimientos hasta la entrega en producción.\n- Implementación de módulos de backend para manejo de contenido, gestión de usuarios, agendamiento y administración de datos.\n- Desarrollo de interfaces dinámicas usando JavaScript Vanilla, Ajax y jQuery, priorizando la usabilidad y la respuesta rápida del sistema.\n- Construcción de soluciones como:\n  - Administradores de contenido (CMS) personalizados.\n  - Administradores de citas médicas con manejo de agendas, disponibilidad y recordatorios.\n  - Landing pages orientadas a conversión, optimizadas para campañas de marketing.\n  - Implementaciones y ajustes para SEO técnico en sitios y landing pages.\n- Manejo y modelado de bases de datos MySQL, incluyendo creación de tablas, consultas optimizadas y mantenimiento de datos.\n- Uso constante de control de versiones (por ejemplo, Git) para garantizar trazabilidad y colaboración ordenada.\n\n---\n\n## Logros y resultados\n\n- Contribuí al desarrollo y mejora de múltiples aplicaciones en producción, alineadas a necesidades específicas de cada cliente.\n- Participé en la construcción de módulos de administración de contenido que facilitaron la gestión de información sin requerir intervención técnica constante.\n- Aporté al desarrollo de sistemas de citas médicas que ayudaron a organizar mejor la atención y reducir fricciones en el agendamiento.\n- Implementé mejoras frontend con JavaScript, Ajax y jQuery que permitieron interfaces más fluidas y una mejor experiencia de usuario.\n- Aseguré que el código se mantuviera versionado, ordenado y fácil de mantener, evitando soluciones rápidas de baja calidad y priorizando la estabilidad a largo plazo.\n\n---\n\n## Stack tecnológico\n\nBackend\n- PHP\n- CodeIgniter\n\nFrontend\n- JavaScript Vanilla\n- jQuery\n- Ajax\n- HTML5, CSS3 (a nivel de integración con las vistas)\n\nBase de datos\n- MySQL\n\nPrácticas de desarrollo\n- Control de versiones de código (p. ej. Git)\n- Separación clara entre frontend y backend\n- Enfoque en código mantenible y reutilizable\n\n---\n\n## Colaboración y forma de trabajo\n\nDurante mi experiencia en Smart Data Automation trabajé de forma cercana con otros desarrolladores y con el equipo encargado de definir requerimientos y prioridades.\n\nMe enfoqué en:\n\n- Mantener una comunicación clara sobre el alcance y el progreso de las funcionalidades.\n- Proponer mejoras técnicas cuando veía oportunidades para simplificar o hacer más robusta una solución.\n- Alinear las entregas con los tiempos acordados, priorizando siempre la calidad del entregable.\n\n---\n\n## Aprendizajes y evolución\n\nEsta experiencia me permitió consolidar mi base como desarrollador fullstack, especialmente en entornos PHP con frameworks MVC y JavaScript en el frontend.\n\nAlgunos aprendizajes clave:\n\n- Importancia de diseñar bases de datos MySQL pensando en el crecimiento y el mantenimiento.\n- Valor del control de versiones para trabajo colaborativo y manejo de cambios.\n- Necesidad de construir interfaces rápidas y sencillas para el usuario final, especialmente en sistemas de uso frecuente como los de citas médicas.\n- Reafirmar un enfoque de mejora continua, manteniendo buenas prácticas y evitando atajos que comprometan calidad o mantenibilidad.\n\nEsta etapa fue una base importante para seguir evolucionando hacia arquitecturas más modernas, mejores prácticas de desarrollo y una visión más integral del ciclo de vida del software.\n",
    "auxiliaryContent": "",
    "fecha": "2026-02-12T00:31:41.000Z",
    "promo": "Construí soluciones web a la medida con PHP Codeigniter, JavaScript y buenas prácticas.",
    "image": null,
    "categoria": "Experiencia",
    "tags": [
      "PHP",
      "CodeIgniter",
      "JavaScript",
      "MySQL",
      "SEO",
      "Github"
    ]
  }
];

export function getFilterOptions(articles: any) {
  const categories = [...new Set(articles.map((a: any) => a.categoria))].sort();
  const tags = [...new Set(articles.flatMap((a: any) => a.tags || []))].sort();
  return { categories, tags };
}

export function filterArticles(articles: any, categoria: any, tag: any) {
  return articles.filter((article: any) => {
    const categoryMatch = !categoria || article.categoria === categoria;
    const tagMatch = !tag || (article.tags && article.tags.includes(tag));
    return categoryMatch && tagMatch;
  });
}

export function paginateArticles(articles: any, page: any, pageSize: any) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return articles.slice(start, end);
}

export function sortArticlesByDate(articles: any) {
  return [...articles].sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
}
'use client'
export default function Head() {
    return (

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Walter Giovanny Cuadros Rincon",
                    "jobTitle": "Cloud Solutions Architect · Delivery Manager · Technical Product Owner",
                    "url": "https://tu-dominio.com",
                    "image": "https://tu-dominio.com/foto.jpg",
                    "sameAs": [
                        "https://www.linkedin.com/in/tuusuario",
                        "https://github.com/tuusuario",
                        "https://twitter.com/tuusuario"
                    ]
                }),
            }}
        />
    )





}
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const filterButtons = document.querySelectorAll(".service-tabs button");
const serviceCards = document.querySelectorAll(".service-card");
const pageSections = document.querySelectorAll("[data-page]");
const internalLinks = document.querySelectorAll('a[href^="#"]');
const heroMedia = document.querySelector(".hero-media");
const heroContent = document.querySelector(".hero-content");
const heroTitle = document.querySelector("#hero-title");
const heroAccent = document.querySelector("#hero-accent");
const heroCopy = document.querySelector("#hero-copy");
const aboutImage = document.querySelector("#about-image");
const aboutCard = document.querySelector(".since-card");
const aboutCardKicker = document.querySelector("#about-card-kicker");
const aboutCardTitle = document.querySelector("#about-card-title");
const aboutCardDetail = document.querySelector("#about-card-detail");
const aboutTextPanels = document.querySelectorAll(".about-text-panel");
const serviceEtaaImage = document.querySelector("#service-etaa-image");
const serviceHeavyImage = document.querySelector("#service-heavy-image");
const servicePreventiveImage = document.querySelector("#service-preventive-image");
const serviceHeavyPreventiveImage = document.querySelector("#service-heavy-preventive-image");
const serviceCorrectiveImage = document.querySelector("#service-corrective-image");
const serviceHeavyCorrectiveImage = document.querySelector("#service-heavy-corrective-image");
const serviceRecoveryImage = document.querySelector("#service-recovery-image");
const serviceEngineImage = document.querySelector("#service-engine-image");
const serviceTransmissionImage = document.querySelector("#service-transmission-image");
const serviceHydraulicImage = document.querySelector("#service-hydraulic-image");
const partsImage = document.querySelector("#parts-gallery-image");

const heroSlides = [
  {
    image: "assets/portfolio/heavy-p04-01.jpg",
    title: "Ingeniería que mantiene",
    accent: "todo en marcha.",
    copy: "Mantenimiento, reparación y fabricación para maquinaria pesada, equipos de apoyo aeronáutico y sistemas eléctricos industriales."
  },
  {
    image: "assets/gallery/ciac_1.png",
    title: "Operaciones críticas",
    accent: "sin pausa.",
    copy: "Atendemos equipos de apoyo terrestre con soluciones técnicas confiables, oportunas y seguras."
  },
  {
    image: "assets/gallery/CLAKR_T1.png",
    title: "Equipos en tierra",
    accent: "siempre listos.",
    copy: "Recuperamos y mantenemos tractores aeroportuarios para que cada operación avance sin demoras."
  },
  {
    image: "assets/gallery/mechanics-424130.jpg",
    title: "Diagnóstico preciso para devolver potencia y",
    accent: "confiabilidad.",
    copy: "Cada motor recibe diagnóstico y reparación especializada para devolver fuerza, estabilidad y confianza."
  },
  {
    image: "assets/gallery/minicargador_2.png",
    title: "Maquinaria pesada",
    accent: "bajo control.",
    copy: "Soporte técnico para equipos que trabajan en construcción, agro, minería e industria."
  },
  {
    image: "assets/gallery/pay_las.png",
    title: "Remolcadores aeroportuarios siempre listos para",
    accent: "pista.",
    copy: "Mantenimiento y reparación para paymovers, loaders y equipos de plataforma aeroportuaria."
  },
  {
    image: "assets/gallery/planta_1.png",
    title: "Energía confiable",
    accent: "cuando importa.",
    copy: "Soluciones para plantas eléctricas y sistemas industriales que respaldan la continuidad operativa."
  },
  {
    image: "assets/gallery/Retro_1.png",
    title: "Más vida útil",
    accent: "más productividad.",
    copy: "Extendemos el rendimiento de retroexcavadoras, cargadores y equipos sometidos a trabajo pesado."
  },
  {
    image: "assets/gallery/TLD_T1.JPG",
    title: "Soluciones técnicas para equipos que",
    accent: "no se detienen.",
    copy: "Intervenimos equipos clave con criterio técnico, repuestos adecuados y pruebas de funcionamiento."
  },
  {
    image: "assets/gallery/TLD_T2.JPG",
    title: "Ground handling",
    accent: "sin improvisar.",
    copy: "Dejamos los equipos listos, seguros y disponibles para responder en pista."
  }
];

const pageIds = ["inicio", "nosotros", "sectores", "servicios", "proyectos", "contacto"];

const aboutSlides = [
  {
    image: "assets/portfolio/aero-p02-01.jpg",
    alt: "Equipo de apoyo terrestre atendiendo una aeronave",
    cardKicker: "Desde",
    cardTitle: "2005",
    cardDetail: "Bogotá, Colombia"
  },
  {
    image: "assets/gallery/Dollys_1_.png",
    alt: "Dolly aeroportuario amarillo en zona de carga",
    cardKicker: "Dollys",
    cardTitle: "",
    cardDetail: [
      { number: "+150", label: "Dollys reparados" },
      { number: "+200", label: "Partes fabricadas" },
      { number: "+300", label: "Importaciones" }
    ]
  },
  {
    image: "assets/gallery/Gatos_mod_.JPG",
    alt: "Gatos hidráulicos manuales restaurados en taller",
    cardKicker: "Gatos",
    cardTitle: "",
    cardDetail: [
      { number: "+100", label: "Reparados" },
      { number: "+130", label: "Restaurados" }
    ]
  },
  {
    image: "assets/gallery/Montacarga_1.jpeg",
    alt: "Montacarga amarillo sobre plataforma de transporte",
    cardKicker: "Montacargas",
    cardTitle: "",
    cardDetail: [
      { number: "+200", label: "Montacargas reparadas y entregadas" },
      { number: "+15", label: "Empresas satisfechas" }
    ]
  }
];

const serviceEtaaSlides = [
  {
    image: "assets/gallery/TLD_T2.JPG",
    alt: "Equipo ETAA TLD de apoyo terrestre aeroportuario"
  },
  {
    image: "assets/gallery/Dollys_1_.png",
    alt: "Dolly aeroportuario para manejo de carga"
  },
  {
    image: "assets/gallery/Maletero.png",
    alt: "Carro maletero aeroportuario restaurado"
  },
  {
    image: "assets/gallery/pay_las.png",
    alt: "Paymover aeroportuario LAS en plataforma"
  },
  {
    image: "assets/gallery/PLANTA_2_.png",
    alt: "Planta electrica industrial para soporte operativo"
  },
  {
    image: "assets/gallery/TUG_2_.png",
    alt: "TUG de apoyo terrestre aeroportuario"
  },
  {
    image: "assets/gallery/conveyor_3.png",
    alt: "Conveyor aeroportuario para manejo de equipaje"
  },
  {
    image: "assets/gallery/montacarga_.png",
    alt: "Montacarga para operación logística aeroportuaria"
  }
];

const serviceHeavySlides = [
  {
    image: "assets/gallery/retro_6.png",
    alt: "Retroexcavadora en trabajo pesado sobre terreno lodoso"
  },
  {
    image: "assets/gallery/maquinaria_1.png",
    alt: "Maquinaria pesada amarilla operando en terreno exigente"
  }
];

const servicePreventiveSlides = [
  {
    image: "assets/gallery/TLD_T1.JPG",
    alt: "Tractor TLD en mantenimiento preventivo"
  },
  {
    image: "assets/gallery/Tractor_5.png",
    alt: "Tractor aeroportuario sobre plataforma de transporte"
  },
  {
    image: "assets/gallery/Dolly_4.png?v=card3-imgfix-01",
    alt: "Dolly aeroportuario blanco restaurado"
  },
  {
    image: "assets/gallery/Montacarga_3.png?v=card3-imgfix-01",
    alt: "Montacarga industrial en zona de almacenamiento"
  },
  {
    image: "assets/gallery/tractores_2.png",
    alt: "Tractores TLD blancos en taller"
  }
];

const serviceHeavyPreventiveSlides = [
  {
    image: "assets/gallery/retro_7.png",
    alt: "Retroexcavadora sobre plataforma para mantenimiento preventivo de maquinaria pesada"
  },
  {
    image: "assets/gallery/retro_5.png",
    alt: "Maquinaria pesada amarilla en mantenimiento preventivo"
  }
];

const serviceCorrectiveSlides = [
  {
    image: "assets/gallery/ciac_1.png",
    alt: "Equipos de apoyo aeroportuario en mantenimiento correctivo"
  },
  {
    image: "assets/gallery/motor_2.png",
    alt: "Intervención técnica de motor durante mantenimiento correctivo"
  },
  {
    image: "assets/gallery/Conveyor_5.png",
    alt: "Conveyor aeroportuario en taller durante mantenimiento correctivo"
  },
  {
    image: "assets/gallery/Conveyor_6.png",
    alt: "Conveyor aeroportuario en revisión operativa"
  }
];

const serviceHeavyCorrectiveSlides = [
  {
    image: "assets/gallery/Retro_1.png",
    alt: "Retroexcavadora Caterpillar para mantenimiento correctivo de maquinaria pesada"
  },
  {
    image: "assets/gallery/minicargador_2.png",
    alt: "Minicargador CAT para intervención correctiva en maquinaria pesada"
  }
];

const serviceRecoverySlides = [
  {
    image: "assets/gallery/Montacargas_3_.PNG",
    alt: "Montacarga restaurado visto de frente"
  },
  {
    image: "assets/gallery/Tractor_6.png",
    alt: "Tractor aeroportuario en proceso de recuperación"
  },
  {
    image: "assets/gallery/dollys_2.png",
    alt: "Estructura de dolly con ruedas restauradas"
  }
];

const serviceEngineSlides = [
  {
    image: "assets/gallery/Motor_6.png",
    alt: "Motor industrial reparado en taller"
  },
  {
    image: "assets/gallery/Motor_7.png",
    alt: "Motor y transmisión durante proceso de reparación"
  },
  {
    image: "assets/gallery/Motor_8.jpg",
    alt: "Técnico trabajando en bloque de motor"
  },
  {
    image: "assets/gallery/mechanics-424130.jpg",
    alt: "Detalle de componentes internos de motor"
  },
  {
    image: "assets/gallery/IMG_WB_1.png",
    alt: "Bloque de motor abierto durante diagnóstico"
  }
];

const serviceTransmissionSlides = [
  {
    image: "assets/gallery/c6.jpg",
    alt: "Caja automática y componentes de transmisión"
  },
  {
    image: "assets/gallery/c6_.jpg",
    alt: "Caja automática con engranajes y eje de transmisión"
  },
  {
    image: "assets/gallery/servo__.png",
    alt: "Servo-transmisión sobre estiba en taller"
  },
  {
    image: "assets/gallery/servo_2.png",
    alt: "Servo-transmisión reparada en taller"
  },
  {
    image: "assets/gallery/convertidor.jpg",
    alt: "Convertidor y filtro hidráulico para transmisión"
  },
  {
    image: "assets/gallery/transmission-3652852.jpg",
    alt: "Conjunto de transmisiones en inventario técnico"
  },
  {
    image: "assets/gallery/servo_3.png",
    alt: "Engranajes internos de transmisión"
  }
];

const serviceHydraulicSlides = [
  {
    image: "assets/gallery/IMG-20250108-WA0064.jpg",
    alt: "Componente hidráulico en taller con maquinaria pesada al fondo"
  },
  {
    image: "assets/gallery/bomba_3.png",
    alt: "Bomba hidráulica reparada sobre banco de taller"
  },
  {
    image: "assets/gallery/bomba_4.png",
    alt: "Detalle de bomba hidráulica industrial"
  },
  {
    image: "assets/gallery/Cilindro_2.png",
    alt: "Cilindros hidráulicos restaurados en taller"
  },
  {
    image: "assets/gallery/convertidor_in.jpg",
    alt: "Interior de convertidor hidráulico"
  }
];

const partsSlides = [
  {
    image: "assets/portfolio/import_6.png",
    alt: "Bomba hidráulica importada para equipos industriales"
  },
  {
    image: "assets/portfolio/impor_3.png",
    alt: "Sensor Toyota importado para equipos especializados"
  },
  {
    image: "assets/portfolio/import_6_.png",
    alt: "Control de luces importado para maquinaria y equipos",
    frameClass: "is-portrait-product"
  }
];

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const setActivePage = (pageId, updateHash = true) => {
  const nextPage = pageIds.includes(pageId) ? pageId : "nosotros";

  document.body.classList.add("page-mode");
  pageSections.forEach((section) => {
    const sectionPages = section.dataset.page.split(" ");
    section.classList.toggle("active-page", sectionPages.includes(nextPage));
  });

  internalLinks.forEach((link) => {
    const target = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("active", target === nextPage);
  });

  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");

  if (updateHash && window.location.hash !== `#${nextPage}`) {
    history.pushState(null, "", `#${nextPage}`);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  header.classList.toggle("scrolled", !["inicio", "nosotros"].includes(nextPage));
};

window.addEventListener("scroll", () => {
  const currentPage = window.location.hash.replace("#", "") || "nosotros";
  header.classList.toggle("scrolled", (!["inicio", "nosotros"].includes(currentPage) && document.body.classList.contains("page-mode")) || window.scrollY > 40);
});

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = link.getAttribute("href")?.replace("#", "");
    if (pageIds.includes(target)) {
      event.preventDefault();
      setActivePage(target);
      return;
    }

    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menú");
  });
});

window.addEventListener("popstate", () => {
  setActivePage(window.location.hash.replace("#", ""), false);
});

setActivePage(window.location.hash.replace("#", ""), false);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;

    serviceCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

if (heroMedia && heroContent && heroTitle && heroAccent && heroCopy) {
  const interval = 30000;
  let currentHeroIndex = 0;
  heroMedia.dataset.heroRotator = "ready";

  const randomNextIndex = () => {
    if (heroSlides.length <= 1) return 0;
    let nextIndex = currentHeroIndex;
    while (nextIndex === currentHeroIndex) {
      nextIndex = Math.floor(Math.random() * heroSlides.length);
    }
    return nextIndex;
  };

  const showHeroSlide = (index) => {
    const slide = heroSlides[index];
    currentHeroIndex = index;
    heroMedia.classList.add("is-changing");
    heroContent.classList.add("is-changing");

    window.setTimeout(() => {
      heroMedia.style.setProperty("--hero-image", `url("${slide.image}")`);
      heroMedia.dataset.currentSlide = String(index);
      heroTitle.textContent = slide.title;
      heroAccent.textContent = slide.accent;
      heroCopy.textContent = slide.copy;
      heroContent.classList.toggle("single-tone", Boolean(slide.whiteAccent));
      heroMedia.classList.remove("is-changing");
      heroContent.classList.remove("is-changing");
    }, 420);
  };

  heroSlides.slice(1).forEach((slide) => {
    const image = new Image();
    image.src = slide.image;
  });

  window.setInterval(() => showHeroSlide(randomNextIndex()), interval);
}

if (aboutImage && aboutCard && aboutCardKicker && aboutCardTitle && aboutCardDetail) {
  const interval = 30000;
  let currentAboutIndex = 0;

  const showAboutSlide = (index) => {
    const slide = aboutSlides[index];
    currentAboutIndex = index;
    aboutImage.classList.add("is-changing");
    aboutCard.classList.add("is-changing");

    window.setTimeout(() => {
      aboutImage.src = slide.image;
      aboutImage.alt = slide.alt;
      aboutCardKicker.textContent = slide.cardKicker;
      aboutCardTitle.textContent = slide.cardTitle;
      const detailLines = Array.isArray(slide.cardDetail) ? slide.cardDetail : [{ label: slide.cardDetail }];
      aboutCardDetail.replaceChildren(...detailLines.map((line) => {
        const item = document.createElement("span");
        item.className = line.number ? "stat-line" : "";

        if (line.number) {
          const number = document.createElement("strong");
          number.textContent = line.number;

          const label = document.createElement("span");
          label.textContent = line.label;

          item.append(number, label);
        } else {
          item.textContent = line.label;
        }

        return item;
      }));
      aboutImage.classList.remove("is-changing");
      aboutCard.classList.remove("is-changing");
    }, 520);
  };

  aboutSlides.slice(1).forEach((slide) => {
    const image = new Image();
    image.src = slide.image;
  });

  window.setInterval(() => {
    const nextIndex = (currentAboutIndex + 1) % aboutSlides.length;
    showAboutSlide(nextIndex);
  }, interval);
}

if (aboutTextPanels.length > 1) {
  let currentAboutTextIndex = 0;

  window.setInterval(() => {
    aboutTextPanels[currentAboutTextIndex].classList.remove("active");
    currentAboutTextIndex = (currentAboutTextIndex + 1) % aboutTextPanels.length;
    aboutTextPanels[currentAboutTextIndex].classList.add("active");
  }, 40000);
}

const startImageRotator = (imageElement, slides, interval = 15000) => {
  if (!imageElement || slides.length < 2) return;
  let currentIndex = 0;
  const frameClasses = ["is-portrait-product"];
  const applyFrameClass = (slide) => {
    imageElement.classList.remove(...frameClasses);
    if (slide.frameClass) {
      imageElement.classList.add(slide.frameClass);
    }
  };

  applyFrameClass(slides[0]);

  slides.slice(1).forEach((slide) => {
    const image = new Image();
    image.src = slide.image;
  });

  window.setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    const slide = slides[currentIndex];
    imageElement.classList.add("is-changing");

    window.setTimeout(() => {
      imageElement.src = slide.image;
      imageElement.alt = slide.alt;
      applyFrameClass(slide);
      imageElement.classList.remove("is-changing");
    }, 420);
  }, interval);
};

startImageRotator(serviceEtaaImage, serviceEtaaSlides);
startImageRotator(serviceHeavyImage, serviceHeavySlides);
startImageRotator(servicePreventiveImage, servicePreventiveSlides);
startImageRotator(serviceHeavyPreventiveImage, serviceHeavyPreventiveSlides);
startImageRotator(serviceCorrectiveImage, serviceCorrectiveSlides);
startImageRotator(serviceHeavyCorrectiveImage, serviceHeavyCorrectiveSlides);
startImageRotator(serviceRecoveryImage, serviceRecoverySlides);
startImageRotator(serviceEngineImage, serviceEngineSlides);
startImageRotator(serviceTransmissionImage, serviceTransmissionSlides);
startImageRotator(serviceHydraulicImage, serviceHydraulicSlides);
startImageRotator(partsImage, partsSlides, 15000);

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    "Hola Motores Baks, quiero solicitar información.",
    "",
    `Nombre: ${data.get("name")}`,
    `Empresa: ${data.get("company") || "No indicada"}`,
    `Teléfono: ${data.get("phone")}`,
    `Servicio: ${data.get("service")}`,
    `Mensaje: ${data.get("message") || "Deseo recibir asesoría."}`
  ].join("\n");
  window.open(`https://wa.me/573115792890?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

document.querySelector("#year").textContent = new Date().getFullYear();

// app.js - United Colors of Benetton P365 Campaign Logic 3D Lookbook

// 1. Data Definitions

// Campaign Colorways
const colorways = [
  {
    id: "dg3",
    name: "Deep Green + Gold",
    baseColor: "#004B23",
    shading: "#003217",
    tippingColor: "#D4AF37",
    baseCode: "DG3",
    tippingCode: "D.GOLD"
  },
  {
    id: "pw3",
    name: "Pastel Wheat + Gold",
    baseColor: "#EAD8C3",
    shading: "#cca585",
    tippingColor: "#D4AF37",
    baseCode: "PW3",
    tippingCode: "D.GOLD"
  },
  {
    id: "w101",
    name: "White + Gold",
    baseColor: "#FFFFFF",
    shading: "#d1d5db",
    tippingColor: "#D4AF37",
    baseCode: "101",
    tippingCode: "D.GOLD"
  },
  {
    id: "dt3",
    name: "Deep Teal + Gold",
    baseColor: "#005F73",
    shading: "#003f4d",
    tippingColor: "#D4AF37",
    baseCode: "DT3",
    tippingCode: "D.GOLD"
  },
  {
    id: "dr3",
    name: "Deep Red + Gold",
    baseColor: "#800020",
    shading: "#4d0013",
    tippingColor: "#D4AF37",
    baseCode: "DR3",
    tippingCode: "D.GOLD"
  },
  {
    id: "dc3",
    name: "Chocolate + Gold",
    baseColor: "#3D2314",
    shading: "#211209",
    tippingColor: "#D4AF37",
    baseCode: "DC3",
    tippingCode: "D.GOLD"
  },
  {
    id: "dy3",
    name: "Dark Yellow + Black",
    baseColor: "#D48E15",
    shading: "#9e6505",
    tippingColor: "#000000",
    baseCode: "DY3",
    tippingCode: "100"
  },
  {
    id: "dp3",
    name: "Deep Purple + Gold",
    baseColor: "#4A154B",
    shading: "#290c2a",
    tippingColor: "#D4AF37",
    baseCode: "DP3",
    tippingCode: "D.GOLD"
  },
  {
    id: "b100",
    name: "Black + Gold",
    baseColor: "#111111",
    shading: "#000000",
    tippingColor: "#D4AF37",
    baseCode: "100",
    tippingCode: "D.GOLD"
  }
];

// Personal Stylist Photo mapping and description
const stylistStyles = {
  weekend: {
    title: "Weekend Chill",
    desc: "Pair it with shorts and sneakers for an easy, relaxed vibe. Effortlessly adapt from lounging at home to a casual weekend meetup.",
    tip: "Choose the Pastel Wheat or Deep Green colorway for a nature-inspired casual look. Leave the top button undone to keep the style laid-back.",
    photo: "assets/extracted_img_p32_1.jpeg",
    bg: "radial-gradient(circle, rgba(0, 143, 76, 0.25) 0%, rgba(7, 9, 14, 0.9) 100%)"
  },
  city: {
    title: "City Smart",
    desc: "Tuck it in, add a belt and loafers. Effortlessly polished for brunch dates, casual Fridays at the office, or city walks.",
    tip: "Deep Green or Deep Teal combined with beige chinos is a timeless, high-contrast combination. Keep the placket fully buttoned.",
    photo: "assets/extracted_img_p25_1.jpeg",
    bg: "radial-gradient(circle, rgba(0, 95, 115, 0.25) 0%, rgba(7, 9, 14, 0.9) 100%)"
  },
  work: {
    title: "Work Mode",
    desc: "Layer it under a blazer. Smart, sharp, and ready to dominate the boardroom while maintaining extreme comfort across long hours.",
    tip: "A black or chocolate polo layered beneath a light-colored unstructured blazer creates an understated, premium corporate aesthetic.",
    photo: "assets/extracted_img_p26_1.jpeg",
    bg: "radial-gradient(circle, rgba(61, 35, 20, 0.3) 0%, rgba(7, 9, 14, 0.9) 100%)"
  },
  date: {
    title: "Date Night",
    desc: "Dark polo paired with tailored trousers and leather shoes. Simple, high-impact dressing that screams understated confidence.",
    tip: "Deep Purple or Deep Red offers a rich, luxury evening color profile. Accentuate with gold metal watches or leather accessories.",
    photo: "assets/extracted_img_p18_1.jpeg",
    bg: "radial-gradient(circle, rgba(128, 0, 32, 0.3) 0%, rgba(7, 9, 14, 0.9) 100%)"
  },
  vacation: {
    title: "Vacation Ready",
    desc: "Light colors, linen pants, cool sunglasses, and a relaxed attitude. The ultimate luxury resort outfit that breathes with the sea breeze.",
    tip: "Pastel Wheat or White pairs beautifully with loose linen. Don't worry about creases; the triblend fabric holds its shape elegantly.",
    photo: "assets/extracted_img_p28_1.jpeg",
    bg: "radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, rgba(7, 9, 14, 0.9) 100%)"
  },
  gym: {
    title: "Gym to Go",
    desc: "Throw on a technical zip hoodie or jacket. Designed to transition smoothly from an active morning workout directly to a quick social coffee.",
    tip: "The Anti-odour technology ensures all-day freshness. Pair the black or deep green polo with athletic joggers for performance chic.",
    photo: "assets/extracted_img_p27_1.jpeg",
    bg: "radial-gradient(circle, rgba(45, 106, 79, 0.3) 0%, rgba(7, 9, 14, 0.9) 100%)"
  }
};

// Trial Room Backlight Colors
const roomColors = [
  { name: "Benetton Green", class: "blend-green" },
  { name: "Sunset Gold", class: "blend-gold" },
  { name: "Burgundy Red", class: "blend-purple" },
  { name: "Deep Teal", class: "blend-teal" }
];


// 2. Main Initialization and Interaction Handler
document.addEventListener("DOMContentLoaded", () => {
  
  // Customizer elements
  const swatchGrid = document.getElementById("swatch-grid");
  const toggleHS = document.getElementById("toggle-hs");
  const toggleFS = document.getElementById("toggle-fs");
  const halfSleevesGroup = document.getElementById("half-sleeves");
  const fullSleevesGroup = document.getElementById("full-sleeves");
  
  const bodyPath = document.getElementById("body-path");
  const leftSleeveHalf = document.getElementById("left-sleeve-half");
  const rightSleeveHalf = document.getElementById("right-sleeve-half");
  const leftSleeveFull = document.getElementById("left-sleeve-full");
  const rightSleeveFull = document.getElementById("right-sleeve-full");
  const collarLeft = document.getElementById("collar-left");
  const collarRight = document.getElementById("collar-right");
  
  const cuffTipLines = document.querySelectorAll(".cuff-tip");
  const collarTipLines = document.querySelectorAll(".collar-tip");
  const cuffShadings = document.querySelectorAll(".cuff-shading");
  const metalLogo = document.getElementById("metal-logo");
  
  const colorNameLabel = document.getElementById("selected-color-name");
  const colorCodeLabel = document.getElementById("selected-color-code");
  
  // 3D Carousel Cylinder elements
  const carouselCylinder = document.getElementById("carousel-cylinder");
  const btnPrev = document.getElementById("carousel-prev");
  const btnNext = document.getElementById("carousel-next");
  let carouselAngle = 0;
  
  // Stylist elements
  const styleTabBtns = document.querySelectorAll(".style-tab-btn");
  const styleTitle = document.getElementById("style-title");
  const styleDesc = document.getElementById("style-desc");
  const styleTip = document.getElementById("style-tip");
  const styleFrameBg = document.getElementById("style-frame-bg");
  const stylePhoto = document.getElementById("style-photo");
  
  // Trial Room elements
  const btnNextLight = document.getElementById("btn-next-light");
  const trialRoomLight = document.getElementById("trial-room-light");
  const lightColorLabel = document.getElementById("light-color-label");
  
  // Tongue Sandbox elements
  const tongueSlider = document.getElementById("tongue-slider");
  const tonguePercent = document.getElementById("tongue-percent");
  const targetCrate = document.getElementById("target-crate");
  const tongueLine = document.getElementById("tongue-line");
  const tongueTip = document.getElementById("tongue-tip");
  const tongueFeedback = document.getElementById("tongue-feedback");


  // 3. Mouse Move 3D Parallax Rotation
  const parallaxCards = document.querySelectorAll(".parallax-card");
  
  parallaxCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      
      // Calculate mouse pointer relative coordinates
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Convert to -50% to 50% coordinate frame
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;
      
      const px = xPercent - 50;
      const py = yPercent - 50;
      
      // Tilt card
      const tiltX = -py * 0.25; // max tilt 12.5 deg
      const tiltY = px * 0.25;
      
      card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
      
      // Update mouse variables for gradient glows
      card.style.setProperty("--mouse-x", `${xPercent}%`);
      card.style.setProperty("--mouse-y", `${yPercent}%`);
    });
    
    card.addEventListener("mouseleave", () => {
      // Smooth reset
      card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  });


  // 4. 3D Carousel Cylinder Mechanics with Smooth LERP Scroll Integration
  let targetAngle = 0;
  let currentAngle = 0;
  
  function update3DCarousel() {
    const totalSlides = 6;
    // Calculate active slide index based on current smooth angle
    const activeIndex = ((-currentAngle / 60) % totalSlides + totalSlides) % totalSlides;
    const roundedActiveIndex = Math.round(activeIndex) % totalSlides;
    
    const slides = document.querySelectorAll(".carousel-3d-slide");
    slides.forEach((slide, idx) => {
      if (idx === roundedActiveIndex) {
        slide.classList.remove("dimmed");
      } else {
        slide.classList.add("dimmed");
      }
    });
  }

  // Animation Loop (LERP for buttery smooth rotation)
  function animateCarousel() {
    currentAngle += (targetAngle - currentAngle) * 0.08; // Smooth damping LERP
    carouselCylinder.style.setProperty("--rotate-y", `${currentAngle}deg`);
    update3DCarousel();
    requestAnimationFrame(animateCarousel);
  }
  
  // Start animation loop
  animateCarousel();

  // Scroll event listener to spin cylinder based on viewport visibility
  const lookbookSection = document.getElementById("lookbook-3d");
  window.addEventListener("scroll", () => {
    const rect = lookbookSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // Calculate scroll progress from when it enters from bottom to when it exits at top
    const totalDistance = rect.height + viewportHeight;
    const scrolledDistance = viewportHeight - rect.top;
    
    const progress = Math.max(0, Math.min(1, scrolledDistance / totalDistance));
    
    // Spin 360 degrees over the full scroll duration
    targetAngle = -progress * 360;
  });

  // Relative button offset fallback (smoothly animations via LERP loop)
  btnPrev.addEventListener("click", () => {
    targetAngle += 60;
  });

  btnNext.addEventListener("click", () => {
    targetAngle -= 60;
  });


  // 5. Photorealistic Customizer Setup and Logic (PDF Image Mapping)
  
  // Customizer photo mapping based on Sleeve Cut and Colorway
  const customizerPhotos = {
    hs: {
      dg3: { src: "assets/extracted_img_p14_1.jpeg", filter: "none" },
      pw3: { src: "assets/extracted_img_p13_1.jpeg", filter: "sepia(0.3) brightness(0.95)" },
      w101: { src: "assets/extracted_img_p13_1.jpeg", filter: "none" },
      dt3: { src: "assets/extracted_img_p28_1.jpeg", filter: "none" },
      dr3: { src: "assets/extracted_img_p32_1.jpeg", filter: "none" },
      dc3: { src: "assets/extracted_img_p25_1.jpeg", filter: "none" },
      dy3: { src: "assets/extracted_img_p32_1.jpeg", filter: "hue-rotate(320deg) saturate(1.3)" },
      dp3: { src: "assets/extracted_img_p32_1.jpeg", filter: "hue-rotate(50deg) saturate(1.1)" },
      b100: { src: "assets/extracted_img_p25_1.jpeg", filter: "brightness(0.25) contrast(1.1) grayscale(1)" }
    },
    fs: {
      dg3: { src: "assets/extracted_img_p20_1.jpeg", filter: "none" },
      pw3: { src: "assets/extracted_img_p22_1.jpeg", filter: "sepia(0.3) brightness(0.95)" },
      w101: { src: "assets/extracted_img_p22_1.jpeg", filter: "none" },
      dt3: { src: "assets/extracted_img_p28_1.jpeg", filter: "saturate(0.8) hue-rotate(15deg)" },
      dr3: { src: "assets/extracted_img_p43_1.jpeg", filter: "none" },
      dc3: { src: "assets/extracted_img_p26_1.jpeg", filter: "none" },
      dy3: { src: "assets/extracted_img_p43_1.jpeg", filter: "hue-rotate(320deg) saturate(1.3)" },
      dp3: { src: "assets/extracted_img_p43_1.jpeg", filter: "hue-rotate(50deg) saturate(1.1)" },
      b100: { src: "assets/extracted_img_p26_1.jpeg", filter: "brightness(0.25) contrast(1.1) grayscale(1)" }
    }
  };

  const customizerPhoto = document.getElementById("customizer-photo");
  let currentSelectedColorwayId = "dg3";
  let isFullSleeveState = false;

  function updateCustomizerView() {
    if (!customizerPhoto) return;
    
    const sleeveKey = isFullSleeveState ? "fs" : "hs";
    const data = customizerPhotos[sleeveKey][currentSelectedColorwayId];
    
    if (data) {
      // Fade out photo card
      customizerPhoto.style.opacity = 0;
      
      setTimeout(() => {
        // Swap image source and filter
        customizerPhoto.src = data.src;
        customizerPhoto.style.filter = data.filter;
        
        // Fade back in
        customizerPhoto.style.opacity = 1;
      }, 200);
    }
  }

  // 6. Customizer Colorways Swatches
  function initSwatches() {
    swatchGrid.innerHTML = "";
    colorways.forEach((cw, idx) => {
      const btn = document.createElement("button");
      btn.className = `swatch-btn ${idx === 0 ? "active" : ""}`;
      btn.style.backgroundColor = cw.baseColor;
      btn.style.setProperty("--tipping-color", cw.tippingColor);
      btn.setAttribute("title", cw.name);
      btn.addEventListener("click", () => selectColorway(cw, btn));
      swatchGrid.appendChild(btn);
    });
  }

  function selectColorway(cw, clickedBtn) {
    document.querySelectorAll(".swatch-btn").forEach(btn => btn.classList.remove("active"));
    clickedBtn.classList.add("active");
    
    // Store selected colorway
    currentSelectedColorwayId = cw.id;
    
    // Update photorealistic customizer photo
    updateCustomizerView();
    
    // Update labels
    colorNameLabel.textContent = cw.name;
    colorCodeLabel.textContent = `Base Code: ${cw.baseCode} | Tipping: ${cw.tippingCode}`;
    
    // Sync Hero chameleon polo color
    document.documentElement.style.setProperty("--polo-base-color", cw.baseColor);
  }

  // Toggle sleeves listeners
  toggleHS.addEventListener("click", () => {
    toggleHS.classList.add("active");
    toggleFS.classList.remove("active");
    isFullSleeveState = false;
    updateCustomizerView();
  });

  toggleFS.addEventListener("click", () => {
    toggleFS.classList.add("active");
    toggleHS.classList.remove("active");
    isFullSleeveState = true;
    updateCustomizerView();
  });

  // Initialize Customizer Swatches
  initSwatches();
  updateCustomizerView();
  styleTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      styleTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const styleKey = btn.getAttribute("data-style");
      const data = stylistStyles[styleKey];
      
      if (data) {
        // Fade out visual
        stylePhoto.style.opacity = 0;
        
        setTimeout(() => {
          // Update texts
          styleTitle.textContent = data.title;
          styleDesc.textContent = data.desc;
          styleTip.textContent = data.tip;
          
          // Swap image source and frame background
          stylePhoto.src = data.photo;
          styleFrameBg.style.background = data.bg;
          
          // Fade visual back in
          stylePhoto.style.opacity = 1;
        }, 250);
      }
    });
  });


  // 7. Photorealistic Trial Room Simulator
  let currentLightIdx = 0;
  btnNextLight.addEventListener("click", () => {
    // Fade out previous blending overlay
    const prevColor = roomColors[currentLightIdx];
    trialRoomLight.classList.remove(prevColor.class);
    
    // Shift color index
    currentLightIdx = (currentLightIdx + 1) % roomColors.length;
    const nextColor = roomColors[currentLightIdx];
    
    // Apply next color blend
    trialRoomLight.classList.add(nextColor.class);
    lightColorLabel.textContent = `Color: ${nextColor.name}`;
  });


  // 8. Stretchy Tongue Teaser Mechanics (Photorealistic coordinate pathing)
  tongueSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    tonguePercent.textContent = `${val}%`;
    
    // Snout coordinates inside the extracted_img_p36_1 background:
    // Mouth is around coordinates: X: 275, Y: 75
    const mouthX = 275;
    const mouthY = 75;
    
    // Wooden crate sits at coordinates around: X: 455, Y: 215
    const targetX = 455;
    const targetY = 215;
    
    // Linear interpolation based on slider percentage
    const ratio = val / 100;
    const currX = mouthX + (targetX - mouthX) * ratio;
    const currY = mouthY + (targetY - mouthY) * ratio;
    
    // Draw tongue SVG elements
    tongueLine.setAttribute("x2", currX);
    tongueLine.setAttribute("y2", currY);
    tongueTip.setAttribute("cx", currX);
    tongueTip.setAttribute("cy", currY);
    
    // Visual collision reaction
    if (val >= 95) {
      // Scale crate card
      targetCrate.style.transform = `translateX(-50%) scale(${1 + (val - 95) * 0.04})`;
      
      if (val === 100) {
        tongueFeedback.textContent = "🎯 Got the crate! P365 Triblend Fabric acquired.";
        tongueFeedback.className = "tongue-feedback success";
        tongueTip.setAttribute("r", 9);
      }
    } else {
      targetCrate.style.transform = `translateX(-50%) scale(1)`;
      tongueFeedback.textContent = "Pull the slider to reach the target crate!";
      tongueFeedback.className = "tongue-feedback";
      tongueTip.setAttribute("r", 6);
    }
  });

  // Run builders
  initSwatches();
});

// All image assets — place actual .webp files in assets/images/ before building
// Required files:
// hero-bowl.webp, about-bowl.webp, about-chef.webp,
// service-ready-meals.webp, service-custom-plans.webp, service-weight.webp, service-protein.webp,
// plans-promo.webp, cta-bg.webp,
// avatar-sara.webp, avatar-ahmed.webp, avatar-fatima.webp

const placeholder = require('../../assets/images/placeholder.png');

export const IMAGES = {
  heroBowl: placeholder,
  aboutBowl: placeholder,
  aboutChef: placeholder,
  serviceReadyMeals: placeholder,
  serviceCustomPlans: placeholder,
  serviceWeight: placeholder,
  serviceProtein: placeholder,
  plansPromo: placeholder,
  ctaBg: placeholder,
  avatarSara: placeholder,
  avatarAhmed: placeholder,
  avatarFatima: placeholder,
} as const;
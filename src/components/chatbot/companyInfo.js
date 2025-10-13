export const companyInfo = {
  name: "McDonald's Automac AI",
  description: `
    McDonald's Automac AI is your friendly digital drive-thru assistant.
    It helps customers order faster, discover new menu items, and get real-time
    information about promotions, nutritional facts, and store hours.
  `,

  brand: {
    tagline: "I'm Lovin' It 🍔",
    mission: "To make delicious, feel-good moments easy for everyone.",
    values: ["Quality", "Service", "Cleanliness", "Value"],
    tone: {
      personality: "friendly, energetic, efficient",
      styleGuide: `
        - Speak with enthusiasm and clarity.
        - Use short sentences and emojis to keep it casual.
        - Always be polite and positive.
        - Avoid slang or sarcasm.
      `
    }
  },

  locations: [
    {
      id: 1,
      name: "McDonald's Automac Bogotá",
      address: "Av. El Dorado #68B-85, Bogotá, Colombia",
      phone: "+57 1 345 6789",
      hours: {
        mondayToSunday: "6:00 AM – 11:00 PM"
      }
    },
    {
      id: 2,
      name: "McDonald's Automac Medellín",
      address: "Cra. 43A #7-50, Medellín, Colombia",
      phone: "+57 4 789 1234",
      hours: {
        mondayToSunday: "6:00 AM – 11:00 PM"
      }
    }
  ],
  
  menuHighlights: [
    { item: "Big Mac", price: 4.75, currency: "USD", description: "The iconic double-layer burger with special sauce." },
    { item: "McPollo", price: 4.25, currency: "USD", description: "Crispy chicken sandwich with lettuce and mayo." },
    { item: "Papas Medianas", price: 1.75, currency: "USD", description: "Golden, crispy fries cooked to perfection." },
    { item: "McFlurry Oreo", price: 2.25, currency: "USD", description: "Creamy vanilla ice cream blended with Oreo pieces." }
  ],
  

  faqs: [
    {
      q: "What are your opening hours?",
      a: "Most Automac drive-thrus are open from 6:00 AM to 11:00 PM every day."
    },
    {
      q: "Do you have vegetarian options?",
      a: "Yes! You can try our Veggie Burger or customize your salad and wraps."
    },
    {
      q: "Can I pay with card or mobile?",
      a: "Of course! We accept cash, debit, credit, and mobile payments like Apple Pay."
    },
    {
      q: "Is there a kids’ menu?",
      a: "Yes, our Happy Meal includes a main, fries, drink, and a fun toy!"
    }
  ],

  integrations: {
    orderAPI: "https://api.mcdonalds.com/order",
    menuAPI: "https://api.mcdonalds.com/menu",
    feedbackAPI: "https://api.mcdonalds.com/feedback"
  },

  greetings: [
    "👋 Hi there! Welcome to McDonald's Automac. What can I get started for you today?",
    "🍟 Hey! Craving something delicious? Let’s get your order rolling.",
    "🚗 Welcome to Automac! Are you ready to order?"
  ],

  errorResponses: [
    "😅 Sorry, I didn’t catch that. Could you repeat your order?",
    "🥤 Hmm, that item’s not on our menu. Want to check the full list?",
    "🍔 I’m having trouble connecting right now. Let’s try again in a moment."
  ]
};


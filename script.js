const menuData = {
  breakfast: [
    {img: 'images/breakfast1.jpg.png', name: 'Plain Dosa', price: '₹60'},
    {img: 'images/breakfast2.jpg.png', name: 'Uthapam', price: '₹40'},
    {img: 'images/breakfast3.jpg.png', name: 'Poha', price: '₹40'},
    {img: 'images/breakfast4.jpg.png', name: 'Idli', price: '₹30'},
    {img: 'images/breakfast5.jpg.png', name: 'Upma', price: '₹30'},
    {img: 'images/breakfast6.jpg.png', name: 'Parotta', price: '₹40'},
    {img: 'images/breakfast7.jpg.png', name: 'Vada', price: '₹60'},
    {img: 'images/breakfast8.jpg.png', name: 'Mysore Bonda', price: '₹40'},
    {img: 'images/breakfast9.jpg.png', name: 'Puri', price: '₹30'},
    {img: 'images/breakfast10.jpg.png', name: 'Pesarattu', price: '₹30'},
  ],
  lunch: [
    {img: 'images/lunch1.jpg.png', name: 'Chicken Biryani', price: '₹200'},
    {img: 'images/lunch2.jpg.png', name: 'Veg Fried Rice', price: '₹150'},
    {img: 'images/lunch3.jpg.png', name: 'Vegetable Pulao', price: '₹150'},
    {img: 'images/lunch4.jpg.png', name: 'Tomato Rice', price: '₹150'},
    {img: 'images/lunch5.jpg.png', name: 'Curd Rice', price: '₹100'},
    {img: 'images/lunch6.jpg.png', name: 'Andhra Meals', price: '₹150'},
    {img: 'images/lunch7.jpg.png', name: 'Hyderabad Biryani', price: '₹200'},
    {img: 'images/lunch8.jpg.png', name: 'Mutton Biryani', price: '₹200'},
    {img: 'images/lunch9.jpg.png', name: 'Coconut Rice', price: '₹120'},
    {img: 'images/lunch10.jpg.png', name: 'Gongura Rice', price: '₹120'}
  ],
  dinner: [
    {img: 'images/dinner1.jpg.png', name: 'Mushroom Biryani', price: '₹100'},
    {img: 'images/dinner2.jpg.png', name: 'Butter Naan', price: '₹150'},
    {img: 'images/dinner3.jpg.png', name: 'Tandoori Roti', price: '₹160'},
    {img: 'images/dinner4.jpg.png', name: 'Palak Paneer', price: '₹120'},
    {img: 'images/dinner5.jpg.png', name: 'Aloo Gobhi', price: '₹100'},
    {img: 'images/dinner6.jpg.png', name: 'Tandoori Chicken', price: '₹150'},
    {img: 'images/dinner7.jpg.png', name: 'Sambar Rice', price: '₹100'},
    {img: 'images/dinner8.jpg.png', name: 'Rasam Rice', price: '₹100'},
    {img: 'images/dinner9.jpg.png', name: 'Prawn Biryani', price: '₹200'},
    {img: 'images/dinner10.jpg.png', name: 'Tamarind Rice', price: '₹100'}
  ],
  desserts: [
    {img: 'images/desserts1.jpg.png', name: 'Gulab Jamun', price: '₹80'},
    {img: 'images/desserts2.jpg.png', name: 'Rasgulla', price: '₹80'},
    {img: 'images/desserts3.jpg.png', name: 'Barfi', price: '₹60'},
    {img: 'images/desserts4.jpg.png', name: 'Kulfi', price: '₹50'},
    {img: 'images/beverages1.jpg.png', name: 'Lassi', price: '₹50'},
    {img: 'images/beverages2.jpg.png', name: 'Badam Milk', price: '₹60'},
    {img: 'images/beverages3.jpg.png', name: 'Lemon Soda', price: '₹50'},
    {img: 'images/beverages4.jpg.png', name: 'Rose Milk', price: '₹60'},
    {img: 'images/beverages5.jpg.png', name: 'Sugarcane Juice', price: '₹60'},
    {img: 'images/beverages6.jpg.png', name: 'Falooda', price: '₹80'}
  ]
};
let currentCategory = null;
function toggleItems(category) {
  const container = document.getElementById('menu-items');
  if (currentCategory === category) {
    container.innerHTML = '';
    currentCategory = null;
    return;
  }
  container.innerHTML = '';
  menuData[category].forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menu-item');
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.price}</p>
    `;
    container.appendChild(div);
  });
  currentCategory = category;
}
// Reservation modal logic 
const reserveBtn = document.querySelector('.reserve-btn');
const formModal = document.getElementById('reservation-form');
reserveBtn.addEventListener('click', () => formModal.style.display = 'flex');
formModal.querySelector('.close-btn').addEventListener('click', () => formModal.style.display = 'none');
// Counters animation 
const counters = [
  { id: "dishes", end: 120 },
  { id: "awards", end: 10 },
  { id: "chefs", end: 25 },
  { id: "customers", end: 200 }
];
let started = false;
window.addEventListener('scroll', function() {
  const countersSection = document.getElementById('counters');
  if (!started && window.scrollY + window.innerHeight > countersSection.offsetTop) {
      counters.forEach(counter => {
          let count = 0;
          const target = counter.end;
          const interval = setInterval(() => {
              document.getElementById(counter.id).textContent = ++count;
              if (count === target) clearInterval(interval);
          }, 30);
      });
      started = true;
  }
});
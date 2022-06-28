function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    this.value = this.name === 'health' 
        ? Math.floor(Math.random() * 10 + 30) 
        : Math.floor(Math.random() * 10 + 30);
}

module.exports = Potion;
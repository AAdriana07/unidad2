// subir a la semana 6

// Función par/impar
const evenOrOdd = (n) => {
    if (n % 2 === 0) {
      return 0
    } else {
      return 1
    }
  };
  
  // Número mayor que otro
  const max = (A, B, C) => {
    if (A >= B && A >= C) {
          return A;
      } else if (B >= A && B >= C) {
          return B;
      } else {
          return C;
      }
  };

// Determinar si un número es primo
const isPrime = (n) => {
    if (n <= 1) {
          return false;
      }
      
      for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
              return false; 
          }
      }
      
      return true;
  };

// Determinar si dos números son pares
const areOdd = (n, m) => {
    if (n, m % 2 != 0) {
      return false;
    }
    
    return true;
  };

// Puedes conducir y votar?
const canDriveAndVote = (edad) => {
    if (edad >= 16 && edad >= 18) {
      return true;
    } else {
      return false;
    }
  };
  
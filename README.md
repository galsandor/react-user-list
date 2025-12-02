# Felhasználók listája webalkalmazás (React + Material UI)

Egy tesztfeladatot kaptam a SignCoders cégtől, és örömmel elkészítettem.

Ez a projekt egy React alapú webalkalmazás, amely a publikus API-t használva felhasználói adatokat jelenít meg táblázatos formában.
Lehetőség van névre történő keresésre, az adatok rendezésére, valamint világos / sötét (Light / Dark) téma választására.
A választott téma elmentésre kerül a `localStorage`-be, így az oldal újratöltése után is megmarad.

---

## 🔧 Telepítés és futtatás
### Telepítés 
`npx create-react-app react-user-list`

`npm install @mui/material @emotion/react @emotion/styled`

`npm install @mui/icons-material`

### Futtatás
`npm run start`

## 🎯 Funkciók
Felhasználói lista
  - Az adatok lekérése a https://jsonplaceholder.typicode.com/users végpontról
  - A felhasználók táblázatos megjelenítése
Keresés
  - A név alapján szűrhető lista (real-time)
Rendezés
  - ABC szerinti növekvő (A–Z)
  - ABC szerinti csökkenő (Z–A)
Betöltési állapot
  - API hívás során betöltési képernyő jelenik meg
Hibaállapot
  - API hiba esetén piros figyelmeztető üzenet
Téma váltás (Light / Dark mód)
  - MUI ThemeProvider
  - Preferencia mentése localStorage-be
  - Téma betöltése indításkor

## 🚀 Használt technológiák
- **JavaScript** (ES6+)
- **React**
- **Material UI (MUI)**
- **Fetch API**
- **Netlify** (deploy)

## 📁 Projekt struktúra
src/
 ├─ components/
 │   ├─ ErrorMessage.js
 │   ├─ Loader.js
 │   ├─ ThemeToggle.js
 │   ├─ UsersData.js
 ├─ App.js
 ├─ index.js

## 🎯 Főbb React koncepciók
  - Komponens alapú felépítés
  - useState állapotkezelés
  - useEffect aszinkron adatlekéréshez
  - UI komponensek (MUI)

## Összegzés
Amikor megkaptam a tesztfeladatot, alaposan tanulmányoztam, és úgy éreztem, ismerősnek tűnik számomra.  
Tavaly, a Styxa három hónapos kurzusa során saját tapasztalataimra építve készítettem el ezt a feladatot, és a „Ma tanultam!” nevű webalkalmazás projektből néhány kódot felhasználtam ehhez a munkához. 
Minden feladatot a követelményeknek megfelelően elkészítettem, azonban a függvényírás még nem az erősségem.  
Ezt viszont nagyon szeretném komolyabban megtanulni, és még többet gyakorolni, ezért bízom benne, hogy folyamatos fejlődés vár rám.

## ⚠️ Élő Demo Link
A projekt működő változatát az alábbi linken tekintheted meg:

[Élő demo](https://react-user-list-galsandor.netlify.app/)

Gál Sándor

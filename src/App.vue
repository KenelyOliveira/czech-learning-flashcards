<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-8">
          <header class="text-center">
            <h1>Flashcards!</h1>
          </header>
          <router-view/>
          <footer>Created by <a href="https://github.com/KenelyOliveira">Kenely de Oliveira</a></footer>

      </div>
    </div>


  </div>
</template>
<style>
h1 {
  padding-top: 20%;
  font-family: 'Pacifico', cursive;
  font-family: 'Permanent Marker', cursive;
}

/* body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  text-align: center; 
  background-color: #e3e3e3;
}



footer {
  margin-top: auto;
  text-align: center; 
  position:absolute;
  bottom: 0;
  width:100%;
  height: 20px;
}

button {
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid #87cb84;
  background-color: #87cb84;
  padding: 8px 15px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 250px;
}

.card {
  padding-top: 5%;
  display: block;
  width: 80vw;
  height: 180px;
  background-color: #51aae5;
  border-radius: 7px;
  margin: auto;
  text-align: center;
  line-height: 27px;
  cursor: pointer;
  position: relative;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  -webkit-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
  -moz-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
  box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
  will-change: transform;
}

ul {
  padding-left: 0;
  display: flex;
  flex-flow: row wrap;
}

li {
  list-style-type: none;
  padding: 10px 10px;
  transition: all 0.3s ease;
}

.flip-enter-active {
  transition: all 0.4s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter, .flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}

li:nth-child(-n+3) .card{
  background-color: #e65f51;
  }

li:nth-child(2n+1) .card{
  background-color: #a17de9;
  }

li:nth-child(4n) .card{
  background-color: #feca34;
  }

li:nth-child(5n-2) .card{
  background-color: #51aae5;
  }

li:nth-child(4n+4) .card{
  background-color: #feca34;
  }

li:nth-child(-7n+7) .card{
  background-color: #e46055;
  }

.i-dont-know-button, .i-know-button {
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 150px;
  height: 75px;
  padding: 5%;
  margin-left: 2%;
  margin-right: 2%;
}
 */

</style>

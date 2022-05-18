<template>
  <div>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-8">
        <header class="text-center title">
          <RouterLink
              :to="{ name: 'home' }">
              <span>Flashcards!</span>
          </RouterLink>
        </header>
        <router-view class="pt-5" />
      </div>
    </div>
  </div>
  <div class="navbar fixed-bottom justify-content-center"><p>Developed by <a href="https://github.com/KenelyOliveira" target="_blank">Kenely de Oliveira</a></p></div>
  </div>
</template>
<style>
.title {
  padding-top: 15%;
  font-family: "Pacifico", cursive;
  font-family: "Permanent Marker", cursive;
  font-size: xx-large;
}

a {
  color: inherit;
  text-decoration: none !important;
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

.scale:hover{
  transform: scale(1.1);
}

.flip-button {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 15px;
  opacity: .4;
  transition: all 0.5s ease;
}

.flip-button:hover {
  opacity: 1;
  transform: rotate(360deg);
}

</style>

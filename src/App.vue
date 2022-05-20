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
  <div class="navbar fixed-bottom justify-content-center"><p>Developed by <a href="https://github.com/KenelyOliveira" target="_blank" class="footer-text">Kenely de Oliveira</a></p></div>
  </div>
</template>
<style>

body {
  background-color: #FAFDD6 !important;
  color: #E4E9BE !important;
}

.footer-text {
  color: #A2B38B !important;
}

.title {
  padding-top: 15%;
  font-family: "Pacifico", cursive;
  font-family: "Permanent Marker", cursive;
  font-size: 450%;
  color: #E6BA95;
}

a {
  color: inherit !important;
  text-decoration: none !important;
}

a:hover {
    color: inherit !important;
}
  

.tag-list {
  font-size: medium;
  font-weight: lighter !important;
  list-style-type: none;
}

</style>

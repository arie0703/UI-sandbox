<template>
<div>
  <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-orange">
          <a class="navbar-brand" href="/">Food Shop</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Products</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link class="dropdown-item" to="/pet">Pet</router-link>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-brown my-2 my-sm-0" type="submit">Search</button>
              </form>
            </ul>
          </div>
        </nav>
  </header>
  <router-view/>
</div>
</template>

<script>
// import Top from './components/Top.vue'

export default {
  name: 'App',
  // components: {
  //   Top
  // }
}
</script>

<style>
.bg-orange{
    background-color: #ffaa00;
}
body {
    background-color: #ffe3bf;
    font-family: 'Noto Sans JP';
}
.btn-outline-brown {
  color: #654321;
  border-color: #654321;
}
.btn-outline-brown:hover {
  background-color: #654321;
  color: #fff;
}
</style>

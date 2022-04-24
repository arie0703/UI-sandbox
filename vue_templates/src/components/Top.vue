<template>
  <div class="container py-4 bg-light">
    <h3 class="text-muted px-4">おすすめ商品</h3>
    <div class="d-flex justify-content-center">
      <div class="card mx-2" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="container bg-warning w-100" style="height: 200px;">img</div>
        <div class="card-body">
          <p class="card-text">product->name</p>
        </div>
      </div>

      <div class="card mx-2" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="container bg-warning w-100" style="height: 200px;">img</div>
        <div class="card-body">
          <p class="card-text">product->name</p>
        </div>
      </div>

      <div class="card mx-2" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="container bg-warning w-100" style="height: 200px;">img</div>
        <div class="card-body">
          <p class="card-text">product->name</p>
        </div>
      </div>
    </div>

    
    

  </div>

</template>

<script>
export default {
  name: 'Top',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

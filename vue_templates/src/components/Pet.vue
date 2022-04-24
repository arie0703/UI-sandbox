<template>
  <div class="pet">
      <div class="sky">
        <img src="../assets/pet.png">
        <div class="container p-4 bg-light center-block w-50">
          <p>pet->name</p>
              <p>ようこそ</p>
            <div class="d-flex justify-content-center">
                <button class="btn btn-success mx-1">
                    餌をやる
                </button>
                <button class="btn btn-success mx-1">
                    進化可能
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sky {
    background: linear-gradient(#bbe4fa, hsl(171, 40%, 91%));
    background-position-x: 0%;
    background-position-y: 35%;
    background-repeat: repeat-x;
    height: 400px;
    text-align: center;
}

img {
    width: 200px;
}
</style>

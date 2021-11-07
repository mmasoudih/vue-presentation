<template>
   <header>
    <nav class="navbar">
      <div class="container">
        <section class="wrapper">
          <h1 class="brand"><a href="./index.html" class="brand-link">پروژه مسیریاب</a></h1>
          <div class="menu" id="menu">
            <ul class="menu-inner">
              <li class="menu-item"> <router-link to="/" class="menu-link" tag="a">صفحه اصلی</router-link> </li>
              <li class="menu-item"><router-link to="/shop" class="menu-link" tag="a">فروشگاه </router-link></li>
              <li class="menu-item"><router-link to="/contact" class="menu-link" tag="a">تماس با ما </router-link></li>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>
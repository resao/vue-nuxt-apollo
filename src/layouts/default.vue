<template>
  <div>
    <ul>
      <li><a href="/">Home (server)</a></li>
      <li><a href="/fruit">Fruit (server)</a></li>
      <li><a href="/colours">Colours (server)</a></li>
    </ul>
    <ul>
      <li><nuxt-link to="/">Home (router)</nuxt-link></li>
      <li><nuxt-link to="/fruit">Fruit (router)</nuxt-link></li>
      <li><nuxt-link to="/colours">Colours (router)</nuxt-link></li>
    </ul>
    <nuxt/>
  </div>
</template>

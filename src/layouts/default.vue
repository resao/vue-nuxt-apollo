<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <b-navbar toggleable="md">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand>
          <b-link :to="'/'">Home (router)</b-link>
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item href="/fruit">Fruit (server)</b-nav-item>
            <b-nav-item href="/colours">Colours (server)</b-nav-item>
            <b-nav-item :to="'fruit'">Fruit (router)</b-nav-item>
            <b-nav-item :to="'colours'">Colours (router)</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <nuxt/>
    </div>
  </div>
</div>
</template>

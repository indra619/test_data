<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">IndoPay</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
    </v-app-bar>

    <v-main>
      <router-view/>

    <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary  py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>IndoPay</strong>
      </v-col>
    </v-row>
  </v-footer>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
  
};
</script>

<template>
<div>
  

    <v-app-bar>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">IndoPay</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn @click="this.$router.push({ name: 'Login' });">Login</v-btn> -->
    </v-app-bar>
  
  
</div>
</template>

<script>
import cookie from '@/utils/auth.js'
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,  
      Role: "",
    };

    
  },

  mounted(){
    this.Role = this.user.ROLE
    console.log(this.Role);
  },

  
  

  computed: {
    ...mapGetters({
      getDrawer: "drawer",
      user: "user",
      hasAllAccess: "hasAllAccess",
    }),
    drawer: {
      get() {
        return this.getDrawer;
      },
      set(value) {
        this.setDrawer(value);
      },
    },

    isLogin(){
      return cookie.getCookie() != null
    }
  },

  methods: {
    ...mapActions({
      setDrawer: "setDrawer",
      removeToken: "removeToken",
      removeUser: "removeUser",
    }),

    
  },
};
</script>
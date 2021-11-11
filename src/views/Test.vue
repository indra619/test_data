<template>
<div class="Test">
  <c-toolbar/>

<v-container>

    <v-row align="center" justify="center">
          <v-col cols="12">
            <v-card class="mx-auto elevation-11 py-4 px-2"
            :loading="vloading">
            <template slot="progress">
            <v-progress-linear
            color="deep-purple"
            height="20"
            indeterminate
            ></v-progress-linear>
            </template>
            <span></span>
              <v-row justify="center">
                <v-img src="img/Pay.png" aspect-ratio="2" max-width="300" position="end"></v-img>
                <!-- <v-col cols="4">
                </v-col>-->
              </v-row>

              <h2 class="text-center my-4">Formality Form</h2>
              

              <!-- <v-alert class="mx-2" type="info">
                
                <div>
                Sebagai bentuk dukungan kami untuk memutus mata rantai penularan Corona Virus Disease 2019 (COVID-19). 
                </div>
                <div>Kami mohon bantuan Bapak/Ibu yang akan bertamu ke Indomaret group (HO Kemayoran/Ancol/Menara PIK) untuk mengisi data diri dan menjawab pertanyaan - pertanyaan yang kami berikan.
                    
                </div>
              </v-alert> -->


              <v-form class="pa-4" >
                <div class="my-2">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <span><h3 bold> Data Input </h3> </span>
                    </v-col>
                  </v-row>

                  <v-row >
                    <v-col cols="12" sm="6">
                      <div>

                        <span> Name  <v-text-field v-model="nik"
                        solo
                        value = "hello">
                        </v-text-field>
                        </span>

                      </div>
                    </v-col>
                  

                  
                    <v-col cols="12" sm="6">

                      <span> Age <v-text-field v-model="nama_kary"
                        solo
                        value = "hello">
                        </v-text-field>
                      </span>

                    </v-col>
                  </v-row>

                  <v-row>
                  
                    <v-col cols="12" sm="6">

                      <span> Phone Number <v-text-field v-model="Tanggal_Lahir"
                        solo
                        value = "hello">
                        </v-text-field>
                      </span>

                      
                    </v-col>
                  

                    <v-col cols="12" sm="6">
                      <div>

                        <span> Date <v-text-field v-model="Tanggal_diangkatTetap"
                        solo
                        value = "hello">
                        </v-text-field>
                      </span>

                      </div>
                    </v-col>

<v-row justify="center">
            <v-dialog
            v-model="dialog"
            
            max-width="600px"
            >
            <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
            ><v-icon>mdi-cart-variant</v-icon>
            Purchase
            </v-btn>
            </template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="img/Steam.png"
    ></v-img>

    <v-card-title>Steam Wallet 
      <v-icon class="blue">mdi-check-decagram
      </v-icon></v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <!-- <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          value = "hello"
          size="14"
        ></v-rating> -->
<!-- 
        <div class="grey--text ms-4">
          4.5 (413)
        </div> -->
      </v-row>

      <div class="my-4 text-subtitle-1">
        Gaming Platform
      </div>

      <!-- <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div> -->
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Input Value</v-card-title>

    <v-card-text>
      <v-text-field
          label="Amount"
          v-on:keypress="isNumber($event)"
          v-model="amount"
          type= "number"
          prefix="$"
        ></v-text-field>
    </v-card-text>

    <v-card-title>Select Payment Method</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="payment"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip><v-icon class="blue">mdi-credit-card</v-icon>
        Credit Card</v-chip>

        <v-chip><v-icon class="green">mdi-cash</v-icon>Debit</v-chip>

        <v-chip><v-icon class="yellow">mdi-bitcoin</v-icon>Bitcoin</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        
        @click="reserve"
      >
        Purchase
      </v-btn>
    </v-card-actions>
  </v-card>

  </v-dialog>
            </v-row>
                  </v-row>
                </div>
              </v-form>
            </v-card>
          </v-col>
    </v-row>
</v-container>  

</div>
  
</template>

<script>
// @ is an alias to /src

import CToolbar from '../components/CToolbar.vue'

export default {
  name: 'Test',
  components: {
    CToolbar
  },

    data() {
        return {

      loading: false,
      amount:"",
      selection: 1,
      payment:1,
      dialog: false,

      itemJawab: ["Steam Wallet","CodaPay"],

        }
    },
    

    methods: {

      isNumber(n) { 
      let char = String.fromCharCode(n.keyCode); // Get the character
      if(/^[0-9 . ,]+$/.test(char)) return true; // Match with regex 
      else n.preventDefault(); // If not match, don't add to input text
      },

    
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false, 
        this.dialog = false), 2000)
        
      },
    },
}

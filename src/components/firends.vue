<template>
  <v-card class="pa-1" outlined tile height="95vh">
    <v-card-title class="black--text darken-4">
      朋友列表
      <v-spacer></v-spacer>
      <v-btn color="white" class="text--primary" fab small>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>
    <v-btn tile color="white" x-large block>
      <v-icon left color="blue"> fas fa-plus </v-icon>
      我的群聊
    </v-btn>
    <v-divider></v-divider>
    <v-virtual-scroll :items="items" :item-height="50" height="400">
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar :color="item.color" size="56" class="white--text">
              {{ item.initials }}
            </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ item.fullName }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn depressed small>
              View User

              <v-icon color="orange darken-4" right> mdi-open-in-new </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "#2196F3",
        "#90CAF9",
        "#64B5F6",
        "#42A5F5",
        "#1E88E5",
        "#1976D2",
        "#1565C0",
        "#0D47A1",
        "#82B1FF",
        "#448AFF",
        "#2979FF",
        "#2962FF",
      ],
      names: [
        "Oliver",
        "Jake",
        "Noah",
        "James",
        "Jack",
        "Connor",
        "Liam",
        "John",
        "Harry",
        "Callum",
        "Mason",
        "Robert",
        "Jacob",
        "Jacob",
        "Jacob",
        "Michael",
        "Charlie",
        "Kyle",
        "William",
        "William",
        "Thomas",
        "Joe",
        "Ethan",
        "David",
        "George",
        "Reece",
        "Michael",
        "Richard",
        "Oscar",
        "Rhys",
        "Alexander",
        "Joseph",
        "James",
        "Charlie",
        "James",
        "Charles",
        "William",
        "Damian",
        "Daniel",
        "Thomas",
        "Amelia",
        "Margaret",
        "Emma",
        "Mary",
        "Olivia",
        "Samantha",
        "Olivia",
        "Patricia",
        "Isla",
        "Bethany",
      ],
      surnames: [
        "Smith",
        "Anderson",
        "Clark",
        "Wright",
        "Mitchell",
        "Johnson",
        "Thomas",
        "Rodriguez",
        "Lopez",
        "Perez",
        "Williams",
        "Jackson",
        "Lewis",
        "Hill",
        "Roberts",
        "Jones",
        "White",
        "Lee",
        "Scott",
        "Turner",
        "Brown",
        "Harris",
        "Walker",
        "Green",
        "Phillips",
        "Davis",
        "Martin",
        "Hall",
        "Adams",
        "Campbell",
        "Miller",
        "Thompson",
        "Allen",
        "Baker",
        "Parker",
        "Wilson",
        "Garcia",
        "Young",
        "Gonzalez",
        "Evans",
        "Moore",
        "Martinez",
        "Hernandez",
        "Nelson",
        "Edwards",
        "Taylor",
        "Robinson",
        "King",
        "Carter",
        "Collins",
      ],
    };
  },

  computed: {
    items() {
      const namesLength = this.names.length;
      const surnamesLength = this.surnames.length;
      const colorsLength = this.colors.length;

      return Array.from({ length: 10000 }, (k, v) => {
        const name = this.names[this.genRandomIndex(namesLength)];
        const surname = this.surnames[this.genRandomIndex(surnamesLength)];
        return {
          color: this.colors[this.genRandomIndex(colorsLength)],
          fullName: `${name} ${surname}`,
          initials: `${name[0]} ${surname[0]}`,
        };
      });
    },
  },

  methods: {
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },
  },
};
</script>

<style>
</style>
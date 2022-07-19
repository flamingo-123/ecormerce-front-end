<template>
 <v-app :style="{ background: $vuetify.theme.themes.light.background }" app flat>
  <v-container fluid class="fill-height">
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="5" lg="4" class="ma-auto">
        <v-card outlined :loading="loading" elevation="8" title >
          <div class="px-8 pt-6 pb-12">
            <v-card-title class="text-center">旧淘</v-card-title>
            <v-card-subtitle class="mb-5">登录</v-card-subtitle>
            <v-card-text>
              <ValidationObserver ref="form" v-slot="{ handleSubmit, reset }">
                <form
                  @submit.prevent="handleSubmit(signin)"
                  @reset.prevent="reset"
                >
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="邮箱"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="email"
                      :error-messages="errors"
                      label="邮箱"
                      outlined
                    ></v-text-field>
                  </ValidationProvider>
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="密码"
                    rules="required"
                  >
                    <p class="ma-0 text-right">
                      <v-btn
                        text
                        small
                        class="pl-0 text-capitalize"
                        color="primary"
                        href="true"
                        >忘记密码?</v-btn
                      >
                    </p>
                    <v-text-field
                      v-model="password"
                      :type="show1 ? 'text' : 'password'"
                      :error-messages="errors"
                      label="密码"
                      outlined
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </ValidationProvider>
                  <div class="mt-6 d-flex justify-space-between">
                    <v-btn
                      text
                      small
                      class="pl-0 text-capitalize"
                      color="primary"
                      router
                      to="signup"
                      >创建一个用户?</v-btn
                    >
                    <v-btn
                      type="submit"
                      class="primary"
                      :loading="loading"
                      depressed
                      >登录</v-btn
                    >
                  </div>
                </form>
              </ValidationObserver>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
 </v-app>
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    email: "",
    password: "",
    loading: false,
    show1: false,
  }),
  methods: {
    async signin() {
      if (this.loading) return;
      this.loading = true;
      const data = await this.$store
        .dispatch("signIn", { email: this.email, password: this.password })
        .catch((err) => {
          this.loading = false;
          console.log(err);
          this.$refs.form.setErrors({
            Email: ["邮箱不存在"],
            Password: ["密码不存在"],
          });
        });
      if (!data) return;
      const user = await this.$store
        .dispatch("setUserData", data)
        .catch((err) => console.log(err));
      if (!user) return;
      this.loading = false;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
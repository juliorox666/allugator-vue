<template>
  <div class="row justify-content-center">
    <div class="col-4">
      <el-form :model="credentials" status-icon :rules="allrules" ref="credentials" class="demo-ruleForm">
      <el-form-item label="Login" prop="login">
        <el-input type="text" v-model="credentials.login" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="senha">
        <el-input type="password" v-model="credentials.senha" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('credentials')">Logar</el-button>
        <el-button @click="resetForm('credentials')">Limpar campos</el-button>
      </el-form-item>
    </el-form>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      credentials: {
        login: '',
        senha: '',
      },
      allrules: {
          login: [
            { required: true, message: 'Por favor informe um login', trigger: 'blur' },
          ],
          senha: [
            { required: true, message: 'Por favor informe uma senha', trigger: 'blur' },
          ],
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {

      var self = this;

      this.$axios.post('/authentication', {
        login: this.credentials.login,
        senha: this.credentials.senha
      }).then((response) => {
        var dados = response.data;
        console.log(dados.senha);

        self.$store.dispatch('setIsUsuarioLogado', true);
        self.$store.dispatch('setUsuarioLogado', dados);
        self.$store.dispatch('setToken', dados.senha);
        localStorage.setItem('token', dados.senha);

      }).catch((error) => {
        console.log('error', error);
      })

    }
  }
}
</script>


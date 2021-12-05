<template>
  <b-modal id="emp-modal" :title="modalTitle" button-size="sm" centered>
    <b-form>
      <b-form-group label="Name">
        <b-form-input type="text" required v-model="name"></b-form-input>
      </b-form-group>
      <b-form-group label="Role">
        <b-form-select
          :options="roleOptions"
          value-field="text"
          text-field="text"
          required
          v-model="role"
        ></b-form-select>
      </b-form-group>
      <b-form-group label="Address">
        <b-form-textarea
          rows="2"
          max-rows="3"
          v-model="address"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group label="Hobby">
        <b-form-tags
          v-model="hobby"
          placeholder=""
          remove-on-delete
          tag-pills
          tag-variant="warning"
        ></b-form-tags>
      </b-form-group>
    </b-form>

    <template #modal-footer="{ cancel }">
      <b-button size="sm" variant="secondary" @click="onSubmit">
        {{ confirmTitle }}
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()"> Cancel </b-button>
    </template>
  </b-modal>
</template>

<script>
import { uuid } from 'vue-uuid'
export default {
  props: ['isEdit', 'empId'],
  data() {
    return {
      name: '',
      role: '',
      address: '',
      roleOptions: [
        { text: 'Regional VP' },
        { text: 'Manager' },
        { text: 'Supervisor' },
        { text: 'HRD' },
      ],
      hobby: [],
      modalTitle: '',
      confirmTitle: '',
    }
  },
  methods: {
    onSubmit() {
      const newEmployee = {
        name: this.name,
        role: this.role,
        address: this.address,
        hobby: this.hobby,
      }
      if (!this.isEdit) {
        this.$store.commit('addEmployee', { ...newEmployee, id: uuid.v1() })
      } else {
        this.$store.commit('editEmployee', { ...newEmployee, id: this.empId })
      }
      this.name = ''
      this.role = ''
      this.address = ''
      this.hobby = []
      this.$bvModal.hide('emp-modal')
    },
  },
  mounted() {
    this.$root.$on('bv::modal::show', (event, modalId) => {
      this.modalTitle = this.isEdit ? 'Edit Employee' : 'Add Employee'
      this.confirmTitle = this.isEdit ? 'Save' : 'Add'
      if (this.isEdit) {
        const emp = this.$store.getters.getEmployee(this.empId)
        this.name = emp.name
        this.role = emp.role
        this.address = emp.address
        this.hobby = emp.hobby
      }
    })
  },
}
</script>

<style></style>

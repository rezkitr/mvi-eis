<template>
  <div>
    <b-card class="mt-3">
      <b-row>
        <b-col>
          <b-button size="sm" v-b-modal.emp-modal @click="onAdd">
            <b-icon icon="plus" aria-hidden="true"></b-icon>
            Add Employee
          </b-button>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <b-table
            hover
            :items="employees"
            :fields="fields"
            v-if="employees.length"
          >
            <template #cell(action)="row">
              <b-button
                size="sm"
                class="mr-2"
                v-b-modal.emp-modal
                @click="onEdit(row)"
              >
                <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>
              </b-button>
              <b-button size="sm" variant="danger" @click="onDelete(row)">
                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
              </b-button>
            </template>
          </b-table>
          <div class="empty-list text-center py-5" v-else>No employee data</div>
        </b-col>
      </b-row>
    </b-card>

    <EmployeeFormModal :isEdit="isEdit" :empId="empId" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ['name', 'role', 'action'],
      isEdit: false,
      empId: null,
    }
  },
  methods: {
    onDelete(row) {
      this.$store.commit('deleteEmployee', row.item.id)
    },
    onEdit(row) {
      this.isEdit = true
      this.empId = row.item.id
    },
    onAdd() {
      this.isEdit = false
      this.empId = null
    },
  },
  computed: {
    employees() {
      return this.$store.state.employees
    },
  },
}
</script>

<style></style>

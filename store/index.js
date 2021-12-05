export const state = () => ({
  userToken: null,
  userName: null,
  employees: [
    { id: 1, name: 'Rezki Triandy', role: 'Regional VP' },
    { id: 2, name: 'Aji Kartiko', role: 'Manager' },
    { id: 3, name: 'Aditya Novi', role: 'HRD' },
  ],
})

export const getters = {
  getEmployee(state) {
    return (id) => {
      const emp = state.employees.find((employee) => employee.id === id)
      return emp
    }
  },
}

export const mutations = {
  setUserToken(state, token) {
    state.userToken = token
  },
  setUserName(state, username) {
    state.userName = username
  },
  clearState(state) {
    state.userToken = null
    state.userName = null
  },
  deleteEmployee(state, id) {
    state.employees = state.employees.filter((employee) => employee.id !== id)
  },
  addEmployee(state, employeeData) {
    const newEmployeeList = [...state.employees, employeeData]
    state.employees = newEmployeeList
  },
  editEmployee(state, employeeData) {
    const newEmployeeList = [...state.employees]
    const empIndex = newEmployeeList.findIndex(
      (employee) => employee.id == employeeData.id
    )
    newEmployeeList[empIndex] = employeeData
    state.employees = newEmployeeList
  },
}

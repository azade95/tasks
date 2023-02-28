// Verilmis ishciler siyahisinda (ischiler obyekt seklindedir ve firstName,lastName,salary deyerleri var) maashi 500-den yuxari olan ishcileri ekrana cap eden alqoritm. 
let worker1={firstName: "Imran", lastName: "Memmedov", salary:1500};
let worker2={firstName: "Fatime", lastName: "Bayramova", salary:1800};
let worker3={firstName: "Anar", lastName: "Huseynov", salary:450};
let worker4={firstName: "Samir", lastName: "Eliyev", salary:800};
let worker5={firstName: "Nigar", lastName: "Seferova", salary:500};

let workers=[worker1, worker2,worker3,worker4,worker5];

for (let i = 0; i < workers.length; i++) {

    if (workers[i].salary>500) {
        console.log(workers[i].firstName, workers[i].lastName);
    }
   
    
}
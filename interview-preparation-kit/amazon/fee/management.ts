class Employee {
    constructor(name, reportTo) {
        this.name = name;
        this.reportTo = reportTo;
        this.reportees = [];
    }
}

class Organization {
    constructor() {
        this.hierarchy = null;
    }
}


function traverseHierarchy(root, reportTo) {
    if (!root) return null;

    let queue = [];
    queue.push(root);

    while (queue.length) {
        let node = queue.shift();

        if (node.name === reportTo) return node;
        else {
            node.reportees.forEach(reportee => {
                queue.push(reportee);
            });
        }
    }
}

Organization.prototype.addEmployee = (name, reportTo) => {
    const emp = new Employee(name, reportTo);

    if (!this.hierarchy) this.hierarchy = emp;
    else {
        if (reportTo) {
            // find reportTo in hierarhcy
            const reportToEmp = traverseHierarchy(this.hierarchy, reportTo);
            if (reportToEmp) {
                reportToEmp.reportees.push(emp);
            } else {
                console.log('Please check your reportTo. As per records it is not exist.');
            }
        } else {
            console.log('Please check your reportTo. You must have it.');
        }
    }

    return this.hierarchy;
}

Organization.prototype.firstDeepest = (hierarchy) => {

    let maxLevel = -1;
    let deepEmp = null;

    function helper(root, level) {

        if (!root) return null;

        level++;
        if (level > maxLevel) {
            maxLevel = level;
            deepEmp = root;
        }
        if (!root.reportees.length) return deepEmp;

        root.reportees.forEach((reportee) => {
            helper(reportee, level);
        });
    }

    helper(hierarchy, 0);
    // console.log(deepEmp, maxLevel);
    return `${deepEmp.name} is at ${maxLevel} position.`;
}

const org = new Organization();
org.addEmployee('A', null);

org.addEmployee('B', 'A');
org.addEmployee('C', 'A');
org.addEmployee('D', 'A');

org.addEmployee('E', 'B');
org.addEmployee('F', 'B');
org.addEmployee('G', 'B');
org.addEmployee('H', 'B');

org.addEmployee('J', 'G');
const currHierarchy = org.addEmployee('K', 'G');

console.log('Hierarchy: ', JSON.stringify(currHierarchy));
console.log(org.firstDeepest(currHierarchy));

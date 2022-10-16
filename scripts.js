class functions {
  init() {
    this.itWorkflows = document.getElementById("itWorkflows");
    this.itWorkflows.onclick = this.handleItWorkflows.bind(this);

    this.employeeWorkflows = document.getElementById("employeeWorkflows");
    this.employeeWorkflows.onclick = this.handleEmployeeWorkflows.bind(this);

    this.customerWorkflows = document.getElementById("customerWorkflows");
    this.customerWorkflows.onclick = this.handleCustomerWorkflows.bind(this);

    this.creatorWorkflows = document.getElementById("creatorWorkflows");
    this.creatorWorkflows.onclick = this.handleCreatorWorkflows.bind(this);
  }

  inactivateTabs() {
    const itWorkflows = document.getElementById("itWorkflows");
    itWorkflows.removeAttribute("class");

    const employeeWorkflows = document.getElementById("employeeWorkflows");
    employeeWorkflows.removeAttribute("class");

    const customerWorkflows = document.getElementById("customerWorkflows");
    customerWorkflows.removeAttribute("class");

    const creatorWorkflows = document.getElementById("creatorWorkflows");
    creatorWorkflows.removeAttribute("class");
  }

  setContent(content) {
    const workflowCard = document.getElementById("workflowCard");
    workflowCard.innerHTML = content;
  }

  handleItWorkflows() {
    this.inactivateTabs();

    // set as active
    const itWorkflows = document.getElementById("itWorkflows");
    itWorkflows.setAttribute("class", "liActive");

    const content = `<div>
          <b>IT Workflows</b>
          <h2>Unleash the power of IT</h2>
          <p>
            Transform your business with digital IT workflows. Modernize your
            operations to optimize productivity, cost, and resilience with a
            single platform for IT.
          </p>
          <p>
            <a>Get Details</a>
          </p>
        </div>
        <div>
          <img src="images/hp-it-workflows.webp" />
        </div>`;

    this.setContent(content);
  }

  handleEmployeeWorkflows() {
    this.inactivateTabs();

    // set as active
    const employeeWorkflows = document.getElementById("employeeWorkflows");
    employeeWorkflows.setAttribute("class", "liActive");

    const content = `<div>
          <b>Employee Workflows</b>
          <h2>Elevate the employee experience</h2>
          <p>
            Make it easier for employees to get what they need, when they need
            it. Embed intelligence into every interaction to deliver experiences
            that break down silos and unlock productivity.
          </p>
          <p>
            <a>Get Details</a>
          </p>
        </div>
        <div>
          <img src="images/hp-employee-workflows.jpg" />
        </div>`;

    this.setContent(content);
  }

  handleCustomerWorkflows() {
    this.inactivateTabs();

    // set as active
    const customerWorkflows = document.getElementById("customerWorkflows");
    customerWorkflows.setAttribute("class", "liActive");

    const content = `<div>
          <b>Customer Workflows</b>
          <h2>Drive customer loyalty</h2>
          <p>
            Reimagine the customer experience to create instant satisfaction.
            Scale service operations with connected digital workflows to
            automate work across departments.
          </p>
          <p>
            <a>Get Details</a>
          </p>
        </div>
        <div>
          <img src="images/hp-customer-workflows.jpg" />
        </div>`;

    this.setContent(content);
  }

  handleCreatorWorkflows() {
    this.inactivateTabs();

    // set as active
    const creatorWorkflows = document.getElementById("creatorWorkflows");
    creatorWorkflows.setAttribute("class", "liActive");

    const content = `<div>
          <b>Creator Workflows</b>
          <h2>Build apps fast</h2>
          <p>
            Create intuitive experiences users love. Quickly build digital
            workflow apps and scale across the enterprise with a low-code
            platform.
          </p>
          <p>
            <a>Get Details</a>
          </p>
        </div>
        <div>
          <img src="images/hp-creator-workflows.webp" />
        </div>`;

    this.setContent(content);
  }
}

const app = new functions();

window.onload = app.init();

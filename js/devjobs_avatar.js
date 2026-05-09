class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  createURL(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  render() {
    const service = this.getAttribute("service") ?? "github";
    const username = this.getAttribute("username") ?? "melldy-monteverde";
    const size = this.getAttribute("size") ?? "40";
    const url = this.createURL(service, username);

    this.shadowRoot.innerHTML = `
    <style>
        img {
          border-radius: 9999px;
          object-fit: cover;
          border: 10px solid 0;
          width: ${size}px;
          height: ${size}px;
        }
    </style>
        <img src="${url}"
            alt="Avatar de ${username} en ${service}"
            class="avatar"
        />
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatar);

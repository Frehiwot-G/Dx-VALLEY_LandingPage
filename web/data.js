// add Event Listener for every component fetchData
document.addEventListener("DOMContentLoaded", displayAboutData);
document.addEventListener("DOMContentLoaded", displayHomeData);
document.addEventListener("DOMContentLoaded", displayHeaderAndFooterData);
document.addEventListener("DOMContentLoaded", fetchProjectData);
document.addEventListener("DOMContentLoaded", registerUser);
document.addEventListener("DOMContentLoaded", displayWorkData);

const strapiUrl="http://10.1.151.64:1337";
// const strapiUrl = process.env.STRAPI_URL;

async function displayAboutData() {
  const response_about = await fetch(
    `${strapiUrl}/api/about-us-page?populate[block][populate][image][fields][0]=url&populate[block][populate][about_us][populate][image][fields][0]=url&populate[block][populate][about_page_2][populate]=true`
  );
  const data = await response_about.json();

  const aboutUstitle = document.getElementById("about-title");
  const aboutUsdescription = document.getElementById("about-desc");
  const aboutUsImage_1 = document.getElementById("about_image");
  const about_div_content = document.getElementById("about_content");
  const about_ul_image = document.getElementsByClassName("ulImage")[0];

  const about_data = data.data.attributes.block;

  about_data.forEach((block) => {
    if (block.__component === "layout.about" && block.about_us) {
      aboutUstitle.innerHTML = `${block.about_us.title}`;
      aboutUsdescription.innerHTML = `${block.about_us.description}`;
      // aboutUsImage_1.src = `../backend/dx-valley/public${block.about_us.image.data.attributes.url}`;
      aboutUsImage_1.src = `${strapiUrl}${block.about_us.image.data.attributes.url}`;
    }
  });

  let aboutContent = "";

  about_data[0].about_page_2.forEach((about) => {
    let li_content = `<div class="col-md-3 bottomgrid1">
                        <h3>${about.title_1}</h3>
                        <span class="fa fa-circle" aria-hidden="true"></span>
                        <h4>${about.title_2}</h4>
                        <p>${about.description}</p>
                    </div>`;
    aboutContent += li_content;
  });

  about_div_content.innerHTML = aboutContent;
}

async function displayHomeData() {
  const response_about = await fetch(
    `${strapiUrl}/api/landing-page?populate[block][populate][email]=true&populate[block][populate][phone]=true&populate[block][populate][address]=true&populate[block][populate][image][fields][0]=url&populate[block][populate][topic][populate][link][populate]=true`
  );
  const data = await response_about.json();

  const home_data = data.data.attributes.block;

  const home_address = document.getElementById("home_address");
  const home_phone = document.getElementById("home_phone");
  const home_email = document.getElementById("home_email");
  const banner_id = document.getElementsByClassName("banner")[0];
  const ul_slider = document.getElementById("flexsliderslides");
  const contact_address = document.getElementById("contactSecondAddress");

  contact_address.innerHTML = home_data[0].Address;

  // banner_id.style.background = 'url("../backend/dx-valley/public`${home_data[0].image.data.attributes.url}`")'
  // banner_id.style.background = `url("../backend/dx-valley/public${home_data[0].image.data.attributes.url}")`;
  banner_id.style.background = `url("${strapiUrl}${home_data[0].image.data.attributes.url}")`;

  home_address.innerHTML = home_data[0].Address;
  home_phone.innerText = home_data[0].phone;
  home_email.innerHTML = home_data[0].email;
  home_email.href = `mailto:${home_data[0].email}`;

  let flexSliderContent = "";

  // left for reservation
  // <a href="${topic.link.url}" data-toggle="modal" data-target="#myModal">${topic.link.text}</a>
  home_data[0].topic.forEach((topic) => {
    let li_slide = `<li>
     <div class="agileits_w3layouts_banner_info">
       <h3>${topic.title}</h3>
       <p class="text-color-p">${topic.description}</p>
       <div class="w3ls-button">
         <a href="${topic.link.url}" target="_blank">${topic.link.text}</a>
       </div>
     </div>
   </li>`;
    flexSliderContent += li_slide;
  });

  ul_slider.innerHTML = flexSliderContent;
}

async function displayHeaderAndFooterData() {
  const response_about = await fetch(
    `${strapiUrl}/api/header-footer-page?populate[blocks][populate][image][field][0]=url&populate[blocks][populate][pages][populate]=true&populate[blocks][populate][email]=true&populate[blocks][populate][phone]=true&populate[blocks][populate][text]=true&populate[blocks][populate][socials][populate]=true`
  );
  let data = await response_about.json();
  const content = document.getElementById("footerContent");
  const footer_text = document.getElementById("text");
  const footer_phone1 = document.getElementById("phone_1");
  const footer_phone2 = document.getElementById("phone_2");
  const footer_back = document.getElementById("footer");

  let footerContent = "";

  headreFooterdata = data.data.attributes.blocks;
  headreFooterdata[1].pages.forEach((page) => {
    let li_slide = `<li>
    <a href=${page.url} class="nav-link">
        ${page.text}
    </a>
    </li>`;
    footerContent += li_slide;
  });
  content.innerHTML = footerContent;
  footer_text.innerHTML = headreFooterdata[1].text;

  footer_back.style.background = `url("${strapiUrl}${headreFooterdata[1].image.data.attributes.url}")`;

  const footer_email = document.getElementById("footer_email");
  footer_email.innerHTML = headreFooterdata[1].email;
  footer_email.href = `mailto:${headreFooterdata[1].email}`;

  footer_phone1.innerHTML = headreFooterdata[1].phone_1;
  footer_phone1.href = `tel:${headreFooterdata[1].phone_1}`;
  footer_phone2.innerHTML = headreFooterdata[1].phone_2;
  footer_phone2.href = `tel:${headreFooterdata[1].phone_2}`;

  const social = document.getElementById("socialcontent");

  let socialContent = "";
  headreFooterdata[1].socials.forEach((social) => {
    let li_slide = ` <li>
    <a href=${social.url}>
        <i class="${social.text}"></i>
    </a>
</li>`;
    socialContent += li_slide;
  });
  social.innerHTML = socialContent;
}

//fetch project data

async function fetchProjectData() {
  const response_project = await fetch(
    `${strapiUrl}/api/projects-page?populate[block][populate][projects][populate][image][fields]&populate[block][populate][projects][populate][link][populate]=true&populate[block][populate][work][populate][description][populate]=true&populate[block][populate][work][populate][image]=url&populate[block][populate][category][populate]=true`
  );

  const data = await response_project.json();

  const project_data = data.data.attributes.block;

  const projectList = document.getElementsByClassName("projectsContent")[0];
  const filterButtons = document.querySelectorAll(".filter-button");

  let list = "";
  project_data[0].projects.forEach((project) => {
    let listItem = `
          <div class="col-lg-4 card" data-name=${project.category}>
              <div class="agileits-services-grids">
                  <img src="${strapiUrl}${project.image.data.attributes.formats.thumbnail.url}" alt="project image" class="image-size">

                  <h4 class="sec-title">${project.title}
                  </h4>
                  <span></span>
                  <p>${project.description}</p>
                  <div class="btns">
                      <button><a href=${project.link.url}>Read More</a></button>
                    </div>
              </div>
            </div>
        `;
    list += listItem;
  });
  projectList.innerHTML = list;

  filterButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const category = button.dataset.category;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filteredProjects = project_data[0].projects.filter((project) => {
        return project.category === category;
      });

      const apiUrl =
        category === "all" ? project_data[0].projects : filteredProjects;
      let List = "";

      apiUrl.forEach((project) => {
        let istItem = `
                <div class="col-lg-4 card" data-name=${project.category}>
                <div class="agileits-services-grids">
                    <img src="${strapiUrl}${project.image.data.attributes.formats.thumbnail.url}" alt="project image" class="image-size">

                    <h4 class="sec-title">${project.title}
                    </h4>
                    <span></span>
                    <p>${project.description}</p>
                    <div class="btns">
                        <button><a href=${project.link.url}>Read More</a></button>
                      </div>
                </div>
              </div>
              `;
        List += istItem;
      });
      projectList.innerHTML = List;
    });
  });
}

// how we work page

async function displayWorkData() {
  const response_project = await fetch(
    `${strapiUrl}/api/projects-page?populate[block][populate][projects][populate][image][fields]&populate[block][populate][projects][populate][link][populate]=true&populate[block][populate][work][populate][description][populate]=true&populate[block][populate][work][populate][image]=url&populate[block][populate][category][populate]=true`
  );

  const data = await response_project.json();

  const project_data = data.data.attributes.block;

  const title1 = document.getElementById("title1");
  const title2 = document.getElementById("title2");
  const title3 = document.getElementById("title3");
  const title4 = document.getElementById("title4");

  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const image3 = document.getElementById("image3");
  const image4 = document.getElementById("image4");

  const description_11 = document.getElementById("description_11");
  const description_12 = document.getElementById("description_12");
  const description_21 = document.getElementById("description_21");
  const description_22 = document.getElementById("description_22");

  const ulWork1 = document.getElementById("work_1");
  const ulWork2 = document.getElementById("work_2");

  title1.innerHTML = project_data[1].work[0].title;
  title3.innerHTML = project_data[1].work[2].title;
  title2.innerHTML = project_data[1].work[1].title;
  title4.innerHTML = project_data[1].work[3].title;

  image1.src = `${strapiUrl}${project_data[1].work[0].image.data.attributes.url}`;
  image3.src = `${strapiUrl}${project_data[1].work[2].image.data.attributes.url}`;
  image2.src = `${strapiUrl}${project_data[1].work[1].image.data.attributes.url}`;
  image4.src = `${strapiUrl}${project_data[1].work[3].image.data.attributes.url}`;

  description_11.innerHTML = project_data[1].work[0].description[0].description;
  description_12.innerHTML = project_data[1].work[0].description[1].description;
  description_21.innerHTML = project_data[1].work[2].description[0].description;
  description_22.innerHTML = project_data[1].work[2].description[1].description;

  let listWork1 = "";

  project_data[1].work[1].description.forEach((work) => {
    let workItem = `
          <li class="list-group-item border-0">
            <i class="fas fa-check mr-3"></i>${work.description}
          </li>
        `;
    listWork1 += workItem;
  });
  ulWork1.innerHTML = listWork1;

  let listWork2 = "";
  console.log(project_data[1].work[1].description);
  project_data[1].work[3].description.forEach((work) => {
    let workItem = `
          <li class="list-group-item border-0">
            <i class="fas fa-check mr-3"></i>${work.description}
          </li>
        `;
    listWork2 += workItem;
  });
  ulWork2.innerHTML = listWork2;
}

async function registerUser() {
  const registerButton = document.getElementById("registerButton");
  const registrationForm = document.getElementById("registrationForm");
  const success_cont = document.getElementById("d_success_msg");
  const error_cont = document.getElementById("d_error_msg");

  registerButton.addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const input_name = document.getElementsByName("name")[0];
    const input_email = document.getElementsByName("email")[0];
    const input_message = document.getElementsByName("message")[0];

    if (email && password) {
      // You can add AJAX or Fetch API calls here to send data to the server
      fetch("${strapiUrl}/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email: email,
          message: message,
          password: "Abc@123",
        }),
      })
        .then((response) => {
          if (!response.ok) {
            error_cont.classList.remove("d-none");
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data) {
            input_name.value = null;
            input_email.value = null;
            input_message.value = null;
            success_cont.classList.remove("d-none");
          } else {
            error_cont.classList.remove("d-none");
          }
        })
        .catch((error) => {
          error_cont.classList.remove("d-none");
        });
    }
  });
}

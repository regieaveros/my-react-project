import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

//Login
export const signIn = (content) => API.post("/user/signin", content);
export const signUp = (content) => API.post("/user/signup", content);

//User
export const getUsers = () => API.get("/user").then((res) => res.data);
export const createUser = (content) => API.post("/user", content).then((res) => res.data);
export const updateUser = (id, content) => API.patch(`/user/${id}`, content).then((res) => res.data);
export const deleteUser = (id) => API.delete(`/user/${id}`).then((res) => res.data);

//Access
export const getAccess = () => API.get("/access").then((res) => res.data);
export const getByIdAccess = (id) => API.get(`/access/${id}`).then((res) => res.data);
export const createAccess = (content) => API.post("/access", content).then((res) => res.data);
export const updateAccess = (id, content) => API.patch(`/access/${id}`, content).then((res) => res.data);
export const deleteAccess = (id) => API.delete(`/access/${id}`).then((res) => res.data);

//User Control
export const getUserControl = () => API.get("/usercontrol").then((res) => res.data);
export const createUserControl = (content) => API.post("/usercontrol", content).then((res) => res.data);
export const updateUserControl = (id, content) => API.patch(`/usercontrol/${id}`, content).then((res) => res.data);
export const deleteUserControl = (id) => API.delete(`/usercontrol/${id}`).then((res) => res.data);

//Note
export const getNote = () => API.get("/note").then((res) => res.data);
export const createNote = (content) => API.post("/note", content).then((res) => res.data);
export const updateNote = (id, content) => API.patch(`/note/${id}`, content).then((res) => res.data);
export const deleteNote = (id) => API.delete(`/note/${id}`).then((res) => res.data);

//Logo Icon
export const getLogoIcon = () => API.get("/logoicon").then((res) => res.data);
export const getByIdLogoIcon = (id) => API.get(`/logoicon/${id}`).then((res) => res.data);
export const createLogoIcon = (content) => API.post("/logoicon", content).then((res) => res.data);
export const updateLogoIcon = (id, content) => API.patch(`/logoicon/${id}`, content).then((res) => res.data);
export const deleteLogoIcon = (id) => API.delete(`/logoicon/${id}`).then((res) => res.data);

//Image
export const getImages = () => API.get("/image").then((res) => res.data);
export const createImage = (content) => API.post("/image", content).then((res) => res.data);
export const updateImage = (id, content) => API.patch(`/image/${id}`, content).then((res) => res.data);
export const deleteImage = (id) => API.delete(`/image/${id}`).then((res) => res.data);

//Content
export const getContent = () => API.get("/content").then((res) => res.data);
export const createContent = (content) => API.post("/content", content).then((res) => res.data);
export const updateContent = (id, content) => API.patch(`/content/${id}`, content).then((res) => res.data);
export const deleteContent = (id) => API.delete(`/content/${id}`).then((res) => res.data);

//Messages
export const getMessage = () => API.get("/message").then((res) => res.data);
export const createMessage = (content) => API.post("/message", content).then((res) => res.data);
export const updateMessage = (id, content) => API.patch(`/message/${id}`, content).then((res) => res.data);
export const deleteMessage = (id) => API.delete(`/message/${id}`).then((res) => res.data);


//Post Type - Template 1 - Features
export const getTemplate1Features = () => API.get("/template1-features").then((res) => res.data);
export const createTemplate1Features = (content) => API.post("/template1-features", content).then((res) => res.data);
export const updateTemplate1Features = (id, content) => API.patch(`/template1-features/${id}`, content).then((res) => res.data);
export const deleteTemplate1Features = (id) => API.delete(`/template1-features/${id}`).then((res) => res.data);

//Post Type - Template 1 - Slider
export const getTemplate1Slider = () => API.get("/template1-slider").then((res) => res.data);
export const createTemplate1Slider = (content) => API.post("/template1-slider", content).then((res) => res.data);
export const updateTemplate1Slider = (id, content) => API.patch(`/template1-slider/${id}`, content).then((res) => res.data);
export const deleteTemplate1Slider = (id) => API.delete(`/template1-slider/${id}`).then((res) => res.data);

//Post Type - Template 1 - Products
export const getTemplate1Products = () => API.get("/template1-products").then((res) => res.data);
export const createTemplate1Products = (content) => API.post("/template1-products", content).then((res) => res.data);
export const updateTemplate1Products = (id, content) => API.patch(`/template1-products/${id}`, content).then((res) => res.data);
export const deleteTemplate1Products = (id) => API.delete(`/template1-products/${id}`).then((res) => res.data);

//Post Type - Template 1 - Social Media
export const getTemplate1SocialMedia = () => API.get("/template1-socialmedia").then((res) => res.data);
export const createTemplate1SocialMedia= (content) => API.post("/template1-socialmedia", content).then((res) => res.data);
export const updateTemplate1SocialMedia = (id, content) => API.patch(`/template1-socialmedia/${id}`, content).then((res) => res.data);
export const deleteTemplate1SocialMedia = (id) => API.delete(`/template1-socialmedia/${id}`).then((res) => res.data);

//Post Type - Template 1 - Our Teams
export const getTemplate1Teams = () => API.get("/template1-teams").then((res) => res.data);
export const createTemplate1Teams= (content) => API.post("/template1-teams", content).then((res) => res.data);
export const updateTemplate1Teams = (id, content) => API.patch(`/template1-teams/${id}`, content).then((res) => res.data);
export const deleteTemplate1Teams = (id) => API.delete(`/template1-teams/${id}`).then((res) => res.data);

//Post Type - Template 2 - Services
export const getTemplate2Services = () => API.get("/template2-services").then((res) => res.data);
export const createTemplate2Services = (content) => API.post("/template2-services", content).then((res) => res.data);
export const updateTemplate2Services = (id, content) => API.patch(`/template2-services/${id}`, content).then((res) => res.data);
export const deleteTemplate2Services = (id) => API.delete(`/template2-services/${id}`).then((res) => res.data);

//Post Type - Template 2 - Work Showcase
export const getTemplate2WorkShowcase = () => API.get("/template2-work-showcase").then((res) => res.data);
export const createTemplate2WorkShowcase = (content) => API.post("/template2-work-showcase", content).then((res) => res.data);
export const updateTemplate2WorkShowcase = (id, content) => API.patch(`/template2-work-showcase/${id}`, content).then((res) => res.data);
export const deleteTemplate2WorkShowcase = (id) => API.delete(`/template2-work-showcase/${id}`).then((res) => res.data);

//Post Type - Template 2 - News
export const getTemplate2News = () => API.get("/template2-news").then((res) => res.data);
export const createTemplate2News = (content) => API.post("/template2-news", content).then((res) => res.data);
export const updateTemplate2News = (id, content) => API.patch(`/template2-news/${id}`, content).then((res) => res.data);
export const deleteTemplate2News = (id) => API.delete(`/template2-news/${id}`).then((res) => res.data);

//Post Type - Template 2 - Best Services
export const getTemplate2BestServices = () => API.get("/template2-best-services").then((res) => res.data);
export const createTemplate2BestServices = (content) => API.post("/template2-best-services", content).then((res) => res.data);
export const updateTemplate2BestServices = (id, content) => API.patch(`/template2-best-services/${id}`, content).then((res) => res.data);
export const deleteTemplate2BestServices = (id) => API.delete(`/template2-best-services/${id}`).then((res) => res.data);

//Post Type - Template 2 - Testimonials
export const getTemplate2Testimonials = () => API.get("/template2-testimonials").then((res) => res.data);
export const createTemplate2Testimonials = (content) => API.post("/template2-testimonials", content).then((res) => res.data);
export const updateTemplate2Testimonials = (id, content) => API.patch(`/template2-testimonials/${id}`, content).then((res) => res.data);
export const deleteTemplate2Testimonials = (id) => API.delete(`/template2-testimonials/${id}`).then((res) => res.data);

//Post Type - Template 2 - Professionals
export const getTemplate2Professionals = () => API.get("/template2-professionals").then((res) => res.data);
export const createTemplate2Professionals = (content) => API.post("/template2-professionals", content).then((res) => res.data);
export const updateTemplate2Professionals = (id, content) => API.patch(`/template2-professionals/${id}`, content).then((res) => res.data);
export const deleteTemplate2Professionals = (id) => API.delete(`/template2-professionals/${id}`).then((res) => res.data);

//Post Type - Template 2 - Social Media
export const getTemplate2SocialMedia = () => API.get("/template2-socialmedia").then((res) => res.data);
export const createTemplate2SocialMedia = (content) => API.post("/template2-socialmedia", content).then((res) => res.data);
export const updateTemplate2SocialMedia = (id, content) => API.patch(`/template2-socialmedia/${id}`, content).then((res) => res.data);
export const deleteTemplate2SocialMedia = (id) => API.delete(`/template2-socialmedia/${id}`).then((res) => res.data);
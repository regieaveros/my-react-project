import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';
import accessRoutes from './routes/access.js';
import usercontrolRoutes from './routes/usercontrol.js';
import noteRoutes from './routes/note.js';
import logoIconRoutes from './routes/logoicon.js';
import imageRoutes from './routes/image.js';
import contentRoutes from './routes/content.js';
import messageRoutes from './routes/message.js';

//Template 1
import temp1FeaturesRoutes from './routes/template1Features.js';
import temp1SliderRoutes from './routes/template1Slider.js';
import temp1ProductsRoutes from './routes/template1Products.js';
import temp1SocialMediaRoutes from './routes/temp1SocialMedia.js';
import temp1TeamsRoutes from './routes/temp1Teams.js';

//Template 2
import temp2ServicesRoutes from './routes/template2Services.js';
import template2WorkShowcaseRoutes from './routes/template2WorkShowcase.js';
import template2NewsRoutes from './routes/template2News.js';
import template2BestServicesRoutes from './routes/template2BestServices.js';
import template2TestimonialsRoutes from './routes/template2Testimonials.js';
import template2ProfessionalsRoutes from './routes/template2Professionals.js';
import template2SocialMediaRoutes from './routes/template2SocialMedia.js';

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/user', userRoutes);
app.use('/access', accessRoutes);
app.use('/usercontrol', usercontrolRoutes);
app.use('/note', noteRoutes);
app.use('/logoicon', logoIconRoutes);
app.use('/image', imageRoutes);
app.use('/content', contentRoutes);
app.use('/message', messageRoutes);

//Template 1
app.use('/template1-features', temp1FeaturesRoutes);
app.use('/template1-slider', temp1SliderRoutes);
app.use('/template1-products', temp1ProductsRoutes);
app.use('/template1-socialmedia', temp1SocialMediaRoutes);
app.use('/template1-teams', temp1TeamsRoutes);

//Template 2
app.use('/template2-services', temp2ServicesRoutes);
app.use('/template2-work-showcase', template2WorkShowcaseRoutes);
app.use('/template2-news', template2NewsRoutes);
app.use('/template2-best-services', template2BestServicesRoutes);
app.use('/template2-testimonials', template2TestimonialsRoutes);
app.use('/template2-professionals', template2ProfessionalsRoutes);
app.use('/template2-socialmedia', template2SocialMediaRoutes);

const CONNECTION_URL = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
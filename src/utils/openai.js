import OpenAI from 'openai';
import { OpenAi_Gpt } from './constants';

const openai = new OpenAI({
  apiKey:OpenAi_Gpt, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});

export default openai
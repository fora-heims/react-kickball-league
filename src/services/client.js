import { createClient } from '@supabase/supabase-js';

export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_Key
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  } else {
    return data;
  }
}

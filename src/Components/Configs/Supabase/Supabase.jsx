import { createClient } from "@supabase/supabase-js";

let projectURL='https://gpuxusmttmacieeycvte.supabase.co';
let APIURL='sb_publishable_RAZPYHq3S3zrO_Llkn-4oA_SsPZNUlX';

export const supabase=createClient(projectURL,APIURL);
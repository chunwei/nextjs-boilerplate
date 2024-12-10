export interface ChatbotStyles {
  theme: string | null;
  chat_icon: string | null;
  button_color: string | null;
  display_name: string | null;
  align_chat_button: string | null;
  user_message_color: string | null;
  regenerate_messages: boolean | null;
  profile_picture_file: string | null;
  collect_user_feedback: boolean | null;
  auto_open_chat_window_after: number | null;
  message_placeholder: string | null;
  header_color: string | null;
  footer: string | null;
}

export interface Chatbot {
  id: string;
  name: string;
  visibility: string;
  created_at: Date;
  team_id: string;
  index_name: string | null;
  status: string;
  last_trained_at: Date | null;
  styles: Partial<ChatbotStyles> |null;
  model: string;
  temp: number;
  embedding_model: string;
  initial_messages: string[];
  suggested_messages: string[];
  credits_used: number;
  credits_limit: number | null;
} 
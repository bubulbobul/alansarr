import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  intituteGMail,
  intituteTelegram,
  whatstappLink,
} from "../../generalInfo";

function ExternalLinks() {
  return (
    <div>
      {/* Gmail Link */}
      <IconButton
        component="a"
        href={`mailto:${intituteGMail}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#D44638" }}
      >
        <EmailIcon sx={{ fontSize: 40 }} />
      </IconButton>

      {/* Telegram Link */}
      <IconButton
        component="a"
        href={intituteTelegram}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#0088cc" }}
      >
        <TelegramIcon sx={{ fontSize: 40 }} />
      </IconButton>

      {/* WhatsApp Link */}
      <IconButton
        component="a"
        href={whatstappLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "#25D366" }}
      >
        <WhatsAppIcon sx={{ fontSize: 40 }} />
      </IconButton>
    </div>
  );
}

export default ExternalLinks;

import Card from "@mui/material/Card";
import "./WeatherCard.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeviceThermostat from "@mui/icons-material/DeviceThermostat";
export default function WeatherCard({ info }) {
  let HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VtbWVyJTIwaG90fGVufDB8fDB8fHww";
  let COLD_URL =
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.temperature < 15
                ? COLD_URL
                : info.humidity > 80
                ? RAIN_URL
                : HOT_URL
            }
            title="green iguana"
          />
          <CardContent
            sx={{
              backgroundColor: " #0093e9",
              color: "white",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {info.city},{info.country}{" "}
              {info.temperature < 15 ? (
                <AcUnitIcon />
              ) : info.humidity > 80 ? (
                <ThunderstormIcon sx={{ color: "grey" }} />
              ) : (
                <WbSunnyIcon sx={{ color: "yellow" }} />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              <DeviceThermostat /> TEMPERATURE : {info.temperature} °C
              <br />
              FEELS LIKE :{info.feels_like}°C <br />
              MAXIMUM TEMPERATURE: {info.max_temperature}°C <br />
              MINIMUM TEMPERATURE:{info.min_temperature}°C <br />
              DESCRIPTION:{info.description} <br />
              humidity: {info.humidity}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

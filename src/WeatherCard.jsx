import Card from "@mui/material/Card";
import "./WeatherCard.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeviceThermostat from "@mui/icons-material/DeviceThermostat";
import { Box } from "@mui/material";
import OpacityIcon from '@mui/icons-material/Opacity';

export default function WeatherCard({ info }) {
  const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VtbWVyJTIwaG90fGVufDB8fDB8fHww";
  const COLD_URL = "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdpbnRlciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

  const getWeatherIcon = () => {
    if (info.temperature < 15) return <AcUnitIcon sx={{ fontSize: 40, color: '#fff' }} />;
    if (info.humidity > 80) return <ThunderstormIcon sx={{ fontSize: 40, color: '#grey' }} />;
    return <WbSunnyIcon sx={{ fontSize: 40, color: '#FFD700' }} />;
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      padding: '20px',
      '@media (max-width: 600px)': {
        padding: '10px',
      }
    }}>
      <Card sx={{ 
        maxWidth: 400,
        width: '100%',
        borderRadius: '15px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)'
        }
      }}>
        <CardMedia
          sx={{ 
            height: 200,
            position: 'relative'
          }}
          image={info.temperature < 15 ? COLD_URL : info.humidity > 80 ? RAIN_URL : HOT_URL}
          title="Weather Background"
        />
        <CardContent sx={{
          background: 'linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)',
          color: 'white',
          padding: '24px'
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 2
          }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              {info.city}, {info.country}
            </Typography>
            {getWeatherIcon()}
          </Box>

          <Box sx={{ 
            display: 'grid', 
            gap: 2,
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'
          }}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                {info.temperature}°C
              </Typography>
              <Typography variant="body1">
                Feels like {info.feels_like}°C
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <DeviceThermostat /> High: {info.max_temperature}°C
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <DeviceThermostat /> Low: {info.min_temperature}°C
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <OpacityIcon /> Humidity: {info.humidity}%
              </Typography>
            </Box>
          </Box>

          <Typography 
            variant="h6" 
            sx={{ 
              marginTop: 2,
              textTransform: 'capitalize',
              fontStyle: 'italic'
            }}
          >
            {info.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

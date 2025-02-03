from app import app
from config import DevelopmentConfig, ProductionConfig
import os

if os.environ.get('FLASK_ENV') == 'production':
    app.config.from_object(ProductionConfig)
else:
    app.config.from_object(DevelopmentConfig)
    

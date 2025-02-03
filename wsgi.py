from app import app
from config import DevelopmentConfig, ProductionConfig
import os

if os.environ.get('FLASK_ENV') == 'production':
    app.config.from_object(ProductionConfig)
else:
    app.config.from_object(DevelopmentConfig)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=10000)
    
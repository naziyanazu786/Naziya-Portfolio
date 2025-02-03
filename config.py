class Config:
    SECRET_KEY = 'your-secret-key-here'  # Change this to a secure secret key
    DEBUG = False

class DevelopmentConfig(Config):
    DEBUG = True

class ProductionConfig(Config):
    DEBUG = False 
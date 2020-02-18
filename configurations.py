class BaseConfig(object):
    """
    Base Config Class
    """
    DEBUG = True
    TESTING = False


class ProductionConfig(BaseConfig):
    """
    Production specific config
    """
    DEBUG = False


class DevelopmentConfig(BaseConfig):
    """
    Development env specific config
    """
    DEBUG = True
    TESTING = True

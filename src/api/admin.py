  
import os
from flask_admin import Admin
from .models import db, User, Scenario, Monster, MonsterAction, MonsterStatBlock, Boss, BossAction, TypeLootDeck, BossStatBlock, Hexagon, LootCard, EventLootCard, LootDeck
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Scenario, db.session))
    admin.add_view(ModelView(Monster, db.session))
    admin.add_view(ModelView(MonsterAction, db.session))
    admin.add_view(ModelView(MonsterStatBlock, db.session))
    admin.add_view(ModelView(Boss, db.session))
    admin.add_view(ModelView(BossAction, db.session))
    admin.add_view(ModelView(BossStatBlock, db.session))
    admin.add_view(ModelView(Hexagon, db.session))
    admin.add_view(ModelView(LootCard, db.session))
    admin.add_view(ModelView(EventLootCard, db.session))
    admin.add_view(ModelView(LootDeck, db.session))
    admin.add_view(ModelView(TypeLootDeck, db.session))
    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))
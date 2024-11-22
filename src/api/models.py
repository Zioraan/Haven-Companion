from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Scenario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    scenario_number = db.Column(db.Integer, unique=True, nullable=False)
    gold = db.Column(db.Integer, unique=False, nullable=False)
    metal = db.Column(db.Integer, unique=False, nullable=False)
    lumber = db.Column(db.Integer, unique=False, nullable=False)
    hide = db.Column(db.Integer, unique=False, nullable=False)
    axenut = db.Column(db.Integer, unique=False, nullable=False)
    flamefruit = db.Column(db.Integer, unique=False, nullable=False)
    corpsecap = db.Column(db.Integer, unique=False, nullable=False)
    rockroot = db.Column(db.Integer, unique=False, nullable=False)
    arrowvine = db.Column(db.Integer, unique=False, nullable=False)
    snowthistle = db.Column(db.Integer, unique=False, nullable=False)
    random_item = db.Column(db.Integer, unique=False, nullable=False)
    monsters = db.relationship('Monster', backref='scenario', lazy=True)
    bosses = db.relationship('Boss', backref='scenario', lazy=True)

    def __repr__(self):
        return f'<Scenario {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "scenario_number": self.scenario_number,
            "gold": self.gold,
            "metal": self.metal,
            "lumber": self.lumber,
            "hide": self.hide,
            "axenut": self.axenut,
            "flamefruit": self.flamefruit,
            "corpsecap": self.corpsecap,
            "rockroot": self.rockroot,
            "arrowvine": self.arrowvine,
            "snowthistle": self.snowthistle,
            "random_item": self.random_item,
            "monsters": [monster.serialize() for monster in self.monsters],
            "bosses": [boss.serialize() for boss in self.bosses]
        }
    
class Monster(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    scenario_id = db.Column(db.Integer, db.ForeignKey('scenario.id'), nullable=False)
    monster_actions = db.relationship('MonsterAction', backref='monster', lazy=True)
    monster_stat_block = db.relationship('MonsterStatBlock', backref='monster', lazy=True)
    
    def __repr__(self):
        return f'<Monster {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "monster_actions": [monster_action.serialize() for monster_action in self.monster_actions],
            "monster_stat_block": [monster_stat_block.serialize() for monster_stat_block in self.monster_stat_block]
        }
    
class MonsterAction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    monster_id = db.Column(db.Integer, db.ForeignKey('monster.id'), nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    intiative = db.Column(db.Integer, unique=False, nullable=False)
    action_1 = db.Column(db.String(120), unique=False, nullable=False)
    action_2 = db.Column(db.String(120), unique=False)
    action_3 = db.Column(db.String(120), unique=False)
    action_4 = db.Column(db.String(120), unique=False)
    shuffle = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<MonsterAction {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "intiative": self.intiative,
            "action_1": self.action_1,
            "action_2": self.action_2,
            "action_3": self.action_3,
            "action_4": self.action_4,
            "shuffle": self.shuffle
        }
    
class MonsterStatBlock(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    monster_id = db.Column(db.Integer, db.ForeignKey('monster.id'), nullable=False)
    level = db.Column(db.Integer, unique=False, nullable=False)
    life = db.Column(db.Integer, unique=False, nullable=False)
    elite_life = db.Column(db.Integer, unique=False, nullable=False)
    damage = db.Column(db.Integer, unique=False, nullable=False)
    elite_damage = db.Column(db.Integer, unique=False, nullable=False)
    movement = db.Column(db.Integer, unique=False, nullable=False)
    elite_movement = db.Column(db.Integer, unique=False, nullable=False)
    special_effects = db.Column(db.String(120), unique=False)
    elite_special_effects = db.Column(db.String(120), unique=False)

    def __repr__(self):
        return f'<MonsterStatBlock {self.monster_id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "level": self.level,
            "life": self.life,
            "elite_life": self.elite_life,
            "damage": self.damage,
            "elite_damage": self.elite_damage,
            "movement": self.movement,
            "elite_movement": self.elite_movement,
            "special_effects": self.special_effects,
            "elite_special_effects": self.elite_special_effects
        }
    
class Boss(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    boss_actions = db.relationship('BossAction', backref='boss', lazy=True)
    boss_stat_block = db.relationship('BossStatBlock', backref='boss', lazy=True)
    scenario_id = db.Column(db.Integer, db.ForeignKey('scenario.id'), nullable=False)
    
    def __repr__(self):
        return f'<Boss {self.name}>'
    
class BossAction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    boss_id = db.Column(db.Integer, db.ForeignKey('boss.id'), nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    intiative = db.Column(db.Integer, unique=False, nullable=False)
    action_1 = db.Column(db.String(120), unique=False, nullable=False)
    action_2 = db.Column(db.String(120), unique=False)
    action_3 = db.Column(db.String(120), unique=False)
    action_4 = db.Column(db.String(120), unique=False)
    shuffle = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<BossAction {self.name}>'
    
class BossStatBlock(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    boss_id = db.Column(db.Integer, db.ForeignKey('boss.id'), nullable=False)
    level = db.Column(db.Integer, unique=False, nullable=False)
    life = db.Column(db.Integer, unique=False, nullable=False)
    damage = db.Column(db.Integer, unique=False, nullable=False)
    movement = db.Column(db.Integer, unique=False, nullable=False)
    special_effects = db.Column(db.String(120), unique=False)

    def __repr__(self):
        return f'<BossStatBlock {self.boss_id}>'
    
class LootCard(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(120), unique=False, nullable=False)
    two_player = db.Column(db.Integer, unique=False, nullable=False)
    three_player = db.Column(db.Integer, unique=False, nullable=False)
    four_player = db.Column(db.Integer, unique=False, nullable=False)
    type_loot_deck_id = db.Column(db.Integer, db.ForeignKey('type_loot_deck.id'), nullable=False)

    def __repr__(self):
        return f'<LootCard {self.type}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "type": self.type,
            "two_player": self.two_player,
            "three_player": self.three_player,
            "four_player": self.four_player
        }
    
class EventLootCard(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(120), unique=False, nullable=False)
    value = db.Column(db.Integer, unique=False, nullable=False)
    event_one = db.Column(db.Float(), unique=False, nullable=False)
    event_two = db.Column(db.Float(), unique=False, nullable=False)
    event_three = db.Column(db.Float(), unique=False, nullable=False)
    event_four = db.Column(db.Float(), unique=False, nullable=False)
    event_five = db.Column(db.Float(), unique=False, nullable=False)
    event_six = db.Column(db.Float(), unique=False, nullable=False)
    event_seven = db.Column(db.Float(), unique=False, nullable=False)
    event_eight = db.Column(db.Float(), unique=False, nullable=False)
    event_nine = db.Column(db.Float(), unique=False, nullable=False)
    event_ten = db.Column(db.Float(), unique=False, nullable=False)
    type_loot_deck_id = db.Column(db.Integer, db.ForeignKey('type_loot_deck.id'), nullable=False)

    def __repr__(self):
        return f'<EventLootCard {self.type}>'

    def serialize(self):
        return {
            "id": self.id,
            "type": self.type,
            "value": self.value,
            "event_one": self.event_one,
            "event_two": self.event_two,
            "event_three": self.event_three,
            "event_four": self.event_four,
            "event_five": self.event_five,
            "event_six": self.event_six,
            "event_seven": self.event_seven,
            "event_eight": self.event_eight,
            "event_nine": self.event_nine,
            "event_ten": self.event_ten
        }
    
class LootDeck(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type_loot_decks = db.relationship('TypeLootDeck', backref='loot_deck', lazy=True)

    def __repr__(self):
        return f'<LootDeck {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "type_loot_deck_id": [type_loot_deck.serialize() for type_loot_deck in self.type_loot_decks]
        }
    
class TypeLootDeck(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(120), unique=True, nullable=False)
    loot_cards = db.relationship('LootCard', backref='type_loot_deck', lazy=True)
    event_loot_cards = db.relationship('EventLootCard', backref='type_loot_deck', lazy=True)
    loot_deck_id = db.Column(db.Integer, db.ForeignKey('loot_deck.id'), nullable=False)

    def __repr__(self):
        return f'<TypeLootDeck {self.type}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "type": self.type,
            "loot_Cards": [loot_card.serialize() for loot_card in self.loot_cards]
        }
    
class Hexagon(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    q = db.Column(db.Integer, nullable=False)  # Axial coordinate q
    r = db.Column(db.Integer, nullable=False)  # Axial coordinate r
    position = db.Column(db.Boolean, nullable=False)  # True if hexagon is a position for a monster or boss
    target = db.Column(db.Boolean, nullable=False)  # True if hexagon is a target for a monster or boss
    ally = db.Column(db.Boolean, nullable=False)  # True if hexagon is an ally for a monster or boss

    def __repr__(self):
        return f'<Hexagon ({self.q}, {self.r})>'

# Association table for many-to-many relationship between MonsterAction and Hexagon
monster_action_hexagon = db.Table('monster_action_hexagon',
    db.Column('monster_action_id', db.Integer, db.ForeignKey('monster_action.id'), primary_key=True),
    db.Column('hexagon_id', db.Integer, db.ForeignKey('hexagon.id'), primary_key=True)
)

# Association table for many-to-many relationship between BossAction and Hexagon
boss_action_hexagon = db.Table('boss_action_hexagon',
    db.Column('boss_action_id', db.Integer, db.ForeignKey('boss_action.id'), primary_key=True),
    db.Column('hexagon_id', db.Integer, db.ForeignKey('hexagon.id'), primary_key=True)
)
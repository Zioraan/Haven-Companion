"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Scenario, Monster, TypeLootDeck, MonsterAction, MonsterStatBlock, Boss, BossAction, BossStatBlock, Hexagon, LootCard, EventLootCard, LootDeck
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/scenario/<int:scenario_number>', methods=['GET'])
def get_scenario(scenario_number):
    scenario = Scenario.query.filter_by(scenario_number=scenario_number).first()
    if scenario is None:
        raise APIException("Scenario not found", status_code=404)
    return jsonify(scenario.serialize()), 200

@api.route('/loot_deck', methods=['GET'])
def get_loot_deck():
    loot_deck = LootDeck.query.all()
    loot_deck = list(map(lambda x: x.serialize(), loot_deck))
    return jsonify(loot_deck), 200

''' leave as is for now, just try leaving the data as is '''

# class Keyword:
#     def __init__(self, dct):
#         self.description = dct["description"]
#         self.name = dct["name"]
#         self.nameRef = dct["nameRef"]


# class Region:
#     def __init__(self, dct):
#         self.abbreviation = dct["abbreviation"]
#         self.iconUrl = dct["iconAbsolutePath"]
#         self.name = dct["name"]
#         self.nameRef = dct["nameRef"]

        
# class SpellSpeed:
#     def __init__(self, dct):
#         self.name = dct["name"]
#         self.nameRef = dct["nameRef"]

        
# class Rarity:
#     def __init__(self, dct):
#         self.name = dct["name"]
#         self.nameRef = dct["nameRef"]


# class GlobalCards:
#     def __init__(self, dct):
#         self.keywords = []
#         self.regions = []   
#         self.spell_speeds = [] 
#         self.rarities = []
        
#         for k in dct["keywords"]:
#             self.keywords.append(Keyword(k))
#         for r in dct["regions"]:
#             self.regions.append(Region(r))
#         for ss in dct["spellSpeeds"]:
#             self.spell_speeds.append(SpellSpeed(ss))
#         for r in dct["rarities"]:
#             self.rarities.append(Rarity(r))
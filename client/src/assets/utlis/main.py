import random
import time

class Warrior:
    title = 'warrior'
    speed = 2
    player_life = 1000
    enemy_life = 1000

    def __init__(self, role):
        self.role = role

    def combat(self):
        while True:  # Infinite game loop
            if self.role == "player":
                player_damage = random.randint(45, 60)
                if random.randint(1, 5) == 1:
                    player_damage *= 2  # Critical hit

                enemy_damage = random.randint(45, 60)
                if random.randint(1, 5) == 1:
                    enemy_damage *= 2  # Critical hit

                self.enemy_life -= player_damage
                self.player_life -= enemy_damage

                print(f"Player {player_damage} damage!", end=" ")
                if player_damage > 60:
                    print("(Critical Hit!)")

                print(f"Enemy {enemy_damage} damage!", end=" ")
                if enemy_damage > 60:
                    print("(Critical Hit!)")

                print(f"Enemy life: {self.enemy_life} Player life: {self.player_life}")

                if self.enemy_life <= 0:
                    print("Enemy defeated!")
                    break

            time.sleep(1)

# Create player instance
player = Warrior("player")

# Start combat
player.combat()
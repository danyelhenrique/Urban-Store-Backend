import { Model, DataTypes } from 'sequelize'
// eslint-disable-next-line no-unused-vars
import { hashSync, compareSync } from 'bcrypt'

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                password: {
                    type: DataTypes.VIRTUAL,
                    allowNull: false
                },
                password_hash: {
                    type: DataTypes.STRING
                },
                avatar_url: {
                    type: DataTypes.STRING,
                    defaultValue:
                        'https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-17-512.png'
                },
                token: {
                    type: DataTypes.TEXT,
                    allowNull: true
                }
            },
            {
                sequelize,
                tableName: 'users',
                freezeTableName: true
            }
        )
        User.addHook('beforeCreate', (user, options) => {
            const password = hashSync(user.password, 8)
            user.password_hash = password
        })
    }

    comparePassword(password) {
        const isValid = compareSync(password, this.password_hash)
        return isValid
    }

    static associate(models) {
        this.belongsToMany(models.Product, {
            through: 'purchases',
            as: 'products',
            foreignKey: 'user_id'
        })
    }
}

export default User

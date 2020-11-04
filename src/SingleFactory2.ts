/**
 * 简单工厂模式
 */
class RuleConfigParserFactory {
    cachedParsers: any
    constructor(ruleConfigFilePath: string) {
        this.cachedParsers = new Map()
        this.cachedParsers.set('json', new JsonRuleConfigParser())
        this.cachedParsers.set('xml', new XmlRuleConfigParser())

        const ruleConfigFileExtension = this.getFileExtension(ruleConfigFilePath)
        const parser = this.createParser(ruleConfigFileExtension)
        let confitText = ''
        let ruleConfig = parser.parse(confitText)
        return ruleConfig
    }

    createParser(configFormat: string) {
        if (!configFormat) return
        const parser = this.cachedParsers.get(configFormat)
        return parser
    }

    private getFileExtension(filePath: string) {
        return 'json'
    }
}

class JsonRuleConfigParser {
    parse(s: string) { }
}

class XmlRuleConfigParser {
    parse(s: string) { }
}